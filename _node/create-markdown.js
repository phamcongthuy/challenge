'use strict'

let { MYSQL_HOST, MYSQL_DATABASE, MYSQL_USERNAME, MYSQL_PASSWORD } = require('./mysql-config.js')

let mysql      = require('mysql')
let connection = mysql.createConnection({
  host     : MYSQL_HOST,
  database : MYSQL_DATABASE,
  user     : MYSQL_USERNAME,
  password : MYSQL_PASSWORD
})

let fs = require('fs')
let mkdirp = require('mkdirp')
let yaml = require('js-yaml')

let phpUnserialize = require('phpunserialize')

function stringToURI(str) {
  return String(str).toLowerCase()
    .replace(/\s/g, '-')
    .replace(/\//g, '-')
    .replace(/\&/g, '-')
    .replace(/\./g, '-')
    .replace(/\:/g, '-')
    .replace(/\|/g, '-')
    .replace(/\_/g, '-')
    .replace(/\,/g, "-")
    .replace(/\+/g, "-")
    .replace(/\r\n?/, '-')  
    .replace(/\'/g, '')
    .replace(/\(/g, '')
    .replace(/\)/g, '')
    .replace(/\{/g, '')
    .replace(/\}/g, '')
    .replace(/\"/g, '')
    .replace(/\#/g, '')
    .replace(/\;/g, '')
    .replace(/\-\-\-\-/g, '-')
    .replace(/\-\-\-/g, '-')
    .replace(/\-\-/g, '-')
    .replace(' ', '');
}

// function removeJsonFromFieldValue(value) {
//   return String(value)
//     .replace(/a:2:{s:10:"section_id";s:5:"[0-9]*";s:6:"answer";s:[0-9]*:"/, '')
//     .replace(/a:2:{s:10:"section_id";s:5:"[0-9]*";s:6:"answer";a:[0-9]*:{i:[0-9]*;s:[0-9]*:"/, '')
//     .replace(/";i:1;s:8:"/, ',')
//     .replace(/";i:2;s:83:"/, ',')
//     .replace('County of Los Angeles (please select only if your project has a countywide benefit)', 'County of Los Angeles')
//     .replace('City of Los Angeles (please select only if your project has a citywide benefit)', 'City of Los Angeles')
//     .replace(/";}/, '')
// }

function createMarkdownFile(writePath, data, data_category, order) {

  console.log('writePath: ' + writePath)
  console.log('data_category: ' + data_category)
  console.log('data: ' + data)
  // console.dir(data)

  for (let prop in data) {
    if (typeof data[prop] === 'string' && data[prop].indexOf('a:2:') === 0) {
      data[prop] = phpUnserialize(data[prop]).answer
    }
    if (prop === 'project_areas') {
      let values = data[prop]
      for (let index = 0; index < values.length; index++) {
        values[index] = values[index].replace(' (please select only if your project has a countywide benefit)', '')
        values[index] = values[index].replace(' (please select only if your project has a citywide benefit)', '')
      }
      data[prop] = values
    } else if (typeof data[prop] === 'string') {
      data[prop] = String(data[prop]).replace(/\n•\t/g, `
* `)
    }
    console.log(data[prop])
    // data[prop] = removeJsonFromFieldValue(data[prop])
  }

  let filename = data.organization_name

  filename = stringToURI(filename)

  data.order = order
  data.category = data_category
  data.uri = `/${data.category}/${filename}`
  delete data.is_finalist
  delete data.is_winner
  delete data.bracket_id
  delete data.votes
  delete data.date_created
  delete data.id
  delete data.status
  delete data.plan_id
  delete data.updated
  delete data.slug

  // https://www.npmjs.com/package/js-yaml#safedump-object---options-
  let output =
`---
${yaml.safeDump(data)}
---
`
  mkdirp(writePath, function (err) {
    if (err) {
      console.error(err);
    } else {
      fs.writeFileSync(writePath + '/' +  filename + '.markdown', output, 'utf8', (err) => {
        if (err) {
          console.log(err);
        }
      });
    }
  });
}

const BRACKETS = {
  'learn':   '973',
  'create':  '974',
  'play':    '975',
  'connect': '976',
  'live':    '977'
}

function generateCollection(data_category) {

  console.log('data_category: ' + data_category)

  let writePath = './_' + data_category // Example: _/learn

  return new Promise((resolve, reject) => {

    const BRACKET_ID = BRACKETS[data_category]

    // Select all of the records
    const query = `SELECT * FROM entries WHERE bracket_id = ${BRACKET_ID}`
    console.log(query)
    connection.query(query, (err, records, fields) => {
      if (err) {
        console.error('error querying mysql: ' + err)
        reject(err); return;
      }

      // For each entry
      for (let index = 0; index < records.length; index++) {
        createMarkdownFile(writePath, records[index], data_category, index)
      }

      resolve(records)

    })

  })


}

let projects = {}

const categories = [
  'learn',
  'create',
  'play',
  'connect',
  'live'
]

let categoriesCursor = 0

function generateNext() {
  let category = categories[categoriesCursor]

  console.log(`**************generateNext: ${category}`)

  generateCollection(category)
    .then(records => {
      projects[category] = records

      categoriesCursor++
      if (categoriesCursor < categories.length) {
        generateNext()
      } else {
        connection.end(function(err) {})
      }
    })
    .catch(reason => console.error(reason))
}


connection.connect(function(err) {
  if (err) {
    console.error('error connecting to mysql: ' + err.stack)
    reject(err); return;
  }

  console.log('connected to mysql as id ' + connection.threadId)

  generateNext()
})


