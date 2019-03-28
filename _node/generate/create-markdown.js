
'use strict';

let fs = require('fs');
let mkdirp = require('mkdirp');
let parse = require('csv-parse/lib/sync');
let yaml = require('js-yaml');
// let request = require("request");

function changeNAtoEmpty(data) {
  for (var prop in data) {
    if (typeof(data[prop]) === 'string' && (
          data[prop].toLowerCase() === 'n/a' || 
          data[prop].toLowerCase() === 'na'  ||
          data[prop].toLowerCase() === 'none'
        )) {
      data[prop] = ''
    }
  }

  return data;
}

// https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript#46181
function isEmailAddress(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function addMailTo(data) {
  for (var prop in data) {
    if (isEmailAddress(data[prop])) {
      data[prop] = `mailto:${data[prop]}`
    }
  }
  return data;
}

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
    .replace(/\‘/g, '')
    .replace(/\’/g, '')
    .replace(/\“/g, '')
    .replace(/\”/g, '')
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
    .replace(/^\-/g, '') // Remove starting dash
    .replace(/\-$/g, '') // Remove trailing dash
    .replace(/ /, '') // Remove empty spaces
    .replace(/ /, '') // Remove empty spaces
    .trim();
}

function getArrayFromString(string) {
  if (!string) return []

  string = string
    .replace('undefined:1', '')
    .replace("\"open spaces\"", "“open spaces”")
    .replace(/^"/g, '')  // Remove leading quote
    .replace(/"$/g, '')  // Remove trailing quote
    .replace(/', '/g, '", "') // Change single quotes into double quotes (since that’s require for valid JSON)
    .replace(/', "/g, '", "')
    .replace(/", '/g, '", "')
    .replace(/\['/g, '["')
    .replace(/'\]/g, '"]');
  //string = `${string}`.replace(/'/g, '"');
  // console.log('parsing JSON string: ' + string);
  // console.log('');
  // console.log('');
  // console.log('');
  return JSON.parse(string);
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function mapAllColumnNames(data) {
  const columnNamesMap = {
      'Application id': 'application_id',
      'Project Title': 'title',
      '2. In one to three sentences, please succinctly describe the project or activities your organization would like support for:': 'project_description',
      'Organization Details: | Organization name: *' : 'organization_name',
      'Describe your organization(s):': 'organization_description',
      'Enter your video URL here:' : 'project_video',
      'Please share the direct link(s) for people to sign up for your newsletter(s):': 'link_newsletter',
      'How can people reach your organization online? | Organization(s) website(s):': 'organization_website',
      'How can people reach your organization online? | Organization(s) Twitter handle(s):': 'organization_twitter',
      'How can people reach your organization online? | Organization(s) Facebook page(s):' : 'organization_facebook',
      'How can people reach your organization online? | Organization(s) Instagram username(s):': 'organization_instagram',
      'Please share a direct link for people to donate to your organization:': 'link_donate',
      'Please share a direct link for people to sign up for volunteer opportunities:': 'link_volunteer',
      '1. In one to two sentences, please describe the mission of your organization:': 'organization_activity',
      '8. Briefly tell us a story that demonstrates how your organization turns inspiration into impact.': 'project_proposal_description',
      '5. In which areas of Los Angeles will you be directly working?': 'project_areas',
      '15. LA2050 will serve as a partner on this project. Which of LA2050’s resources will be of the most value to you?': 'project_la2050_community_resources',
      "6. In what stage of innovation is this project?": 'project_innovation_stage',
      'Please list the organizations collaborating on this proposal:': 'project_collaborators',
      '12. Please explain how you will define and measure success for your project.*' : 'project_measure',
      'Learn_Metrics' : 'learn_metrics',
      'Create_Metrics' : 'create_metrics',
      'Play_Metrics' : 'play_metrics',
      'Connect_Metrics' : 'connect_metrics',
      'Live_Metrics' : 'live_metrics',
      'Learn_Other' : 'learn_other',
      'Create_Other' : 'create_other',
      'Play_Other' : 'play_other',
      'Connect_Other' : 'connect_other',
      'Live_Other' : 'live_other',
      'Organization Details: | Organization EIN: *': 'ein',
      'Organization Details: | Mailing address: *': 'mailing_address_street',
      'Organization Details: | City:': 'mailing_address_city',
      'Organization Details: | State:': 'mailing_address_state',
      'Organization Details: | ZIP:': 'mailing_address_zip',
      'Application label': 'category',
  }

  for (let name in columnNamesMap) {
    if (columnNamesMap.hasOwnProperty(name)) {
      if (data[name] !== undefined) {
        data[columnNamesMap[name]] = data[name];
      }
    }
  }

  for (let name in columnNamesMap) {
    if (columnNamesMap.hasOwnProperty(name)) {
      if (data[name] !== undefined) {
        delete data[name];
      }
    }
  }

  const bestPlaceMap = {
    'connect7': 'project_proposal_best_place',
    'create7': 'project_proposal_best_place',
    'learn7': 'project_proposal_best_place',
    'live7': 'project_proposal_best_place',
    'play7': 'project_proposal_best_place'
  }

  for (let name in bestPlaceMap) {
    if (bestPlaceMap.hasOwnProperty(name)) {
      if (data[name] !== undefined && data[name] != '') {
        data[bestPlaceMap[name]] = data[name];
      }
    }
  }

  for (let name in bestPlaceMap) {
    if (bestPlaceMap.hasOwnProperty(name)) {
      if (data[name] !== undefined) {
        delete data[name];
      }
    }
  }

}

function createMarkdownFile(data) {

  if (data["Current stage"] !== "Voting Period") return;

  mapAllColumnNames(data);

  data = changeNAtoEmpty(data);
  data = addMailTo(data);

  console.log('createMarkdownFile for ' + data.organization_name);

  let filename = stringToURI(data.organization_name);
  
  data.title = data.title.trim();
  data.organization_name = data.organization_name.trim();

  // Page title
  //data.title = data.title + ' — My LA2050 Grants Challenge';

  // https://stackoverflow.com/questions/1117584/generating-guids-in-ruby#answer-1126031
  // https://gist.github.com/emacip/b28ba7e9203a38d440e23c38586c303d
  // >> rand(36**8).to_s(36)
  // => "uur0cj2h"
  // data.unique_identifier = getRandomInt(0, Math.pow(36, 8)).toString(36);
  
  data.project_areas = getArrayFromString(data.project_areas);
  data.project_la2050_community_resources = getArrayFromString(data.project_la2050_community_resources);

  let metrics = getArrayFromString(data.create_metrics)
        .concat(getArrayFromString(data.connect_metrics))
        .concat(getArrayFromString(data.learn_metrics))
        .concat(getArrayFromString(data.live_metrics))
        .concat(getArrayFromString(data.play_metrics))

  let metrics_other = getArrayFromString(data.create_other)
        .concat(getArrayFromString(data.connect_other))
        .concat(getArrayFromString(data.learn_other))
        .concat(getArrayFromString(data.live_other))
        .concat(getArrayFromString(data.play_other))

  data.category_metrics = metrics;
  data.category_other   = metrics_other;

  data.year = 2019;

  // OPTIONAL: Move category to the bottom
  let category = data.category.toLowerCase()
  delete data.category
  data.category = category

  // if (!data.category) data.category = 'connect';
  // 
  // if (data.category.toLowerCase().includes('connect')) {
  //   delete data.category;
  //   data.category = "connect";
  // } else if (data.category.toLowerCase().includes('play')) {
  //   delete data.category;
  //   data.category = "play";
  // } else if (data.category.toLowerCase().includes('learn')) {
  //   delete data.category;
  //   data.category = "learn";
  // } else if (data.category.toLowerCase().includes('live')) {
  //   delete data.category;
  //   data.category = "live";
  // } else if (data.category.toLowerCase().includes('create')) {
  //   delete data.category;
  //   data.category = "create";
  // }
  
  // if (!category) category = data.category.toLowerCase();
  // data.category = category;

  // data.uri = '/' + category + '/' + filename + '/';

  // data.organization_website = data.organization_website.split('; ');
  // data.organization_twitter = data.organization_twitter.split('; ');
  // data.organization_facebook = data.organization_facebook.split('; ');
  // data.organization_instagram = data.organization_instagram.split('; ');
  /*
  data.project_proposal_mobilize = getArrayFromString(data.project_proposal_mobilize);
  data.project_video = data.project_video.replace('watch', 'embed');
  */

  // TEMPORARY: The project video and newsletter fields might be mixed up
  // https://stackoverflow.com/questions/6680825/return-string-without-trailing-slash#6680877
  if (!data.link_newsletter && data.project_video && data.project_video != "" && data.project_video.replace(/\/$/, "") == data.organization_website.replace(/\/$/, "")) {
    data.link_newsletter = data.project_video;
    data.project_video = "";
  }
  if (!data.project_video) data.project_video = '';

  data.filename = filename;
  data.order = orderCursors[data.category]++;

  // if (!data.project_image) data.project_image = '/assets/images/' + category + '/' + filename + '.jpg';

  let toDelete = [
    'Application name',
    'Application state',
    'Application status',
    'Awarded',
    'Q4_Goal_Category',
    'Current stage',
    'Moderation Decision',
    'What is your organization’s annual operating budget?*',
    `13. Please include a detailed line-item budget describing how you will use the grant funding to implement your project or activities.`,
    'How can people reach these organizations online? | Organization(s) Facebook page(s):',
    'How can people reach these organizations online? | Organization(s) Instagram username(s):',
    'How can people reach these organizations online? | Organization(s) Twitter handle(s):',
    'How can people reach these organizations online? | Organization(s) website(s):',
    `How did you hear about this challenge?`,
    'If yes, how many collaborators are involved in this proposal?',
    'Is this proposal a collaboration?',
    'ABOUT YOU * | Your phone number:',
    'ABOUT YOU * | Your name:',
    'ABOUT YOU * | Your phone number:',
    'ABOUT YOU * | Your email:',
    '10. Please list at least one major barrier, challenge, or opposing group(s) you anticipate facing. What is your strategy for overcoming this? *',
    '11. Are there other organizations doing similar work (whether complementary or competitive) and what differentiates yours? *',
    '14. If your proposal will cost more than the amount requested, how will you cover the additional costs?*',
    '9. If you are submitting a collaborative proposal, please describe the role of partner organization/s in the project.*',
    'How large is your organization?*',
    'Has your organization previously applied for a My LA2050 grant? Check all that apply*',
    'learn_metrics',
    'create_metrics',
    'play_metrics',
    'connect_metrics',
    'live_metrics',
    'learn_other',
    'create_other',
    'play_other',
    'connect_other',
    'live_other'
  ];

  toDelete.forEach(name => {
    delete data[name];
  })

  // const applicationIDs = {
  //   'Los Angeles Conservation Corps': '5962365920',
  //   `Lost Angels Children's Project`: '2827931015',
  // 
  // }

  // console.dir(data);
  let writePath = '../_' + data.year + '/' + data.category; // Example: _/2019/connect

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
      fs.writeFileSync(writePath + '/' +  filename + '.md', output, 'utf8', (err) => {
        if (err) {
          console.log(err);
        }
      });
    }
  });
}

let orderCursors = {
  learn: 0,
  create: 0,
  play: 0,
  connect: 0,
  live: 0
}

function fixDataCharactersInString(string) {
  string = string
    .replace(/â€“/g, '—')
    .replace(/â€˜/g, '‘')
    .replace(/â€™/g, '’')
    .replace(/â€¯/g, '') // ?
    .replace(/â€”/g, '—')
    .replace(/â€‹/g, '') // ?
    .replace(/â€œ/g, '“') // ?
    .replace(/â€/g, '”') // ?
    .replace(/â€¢/g, "*")
    .replace(/â€¦/g, "…")
    .replace(/âˆš/g, '√')
    .replace(/â–ª/g, '*')
    .replace(/â—\x8F/g, '*')
    .replace(/â„¢/g, '™')
    .replace(/Â·/g, '* ')
    .replace(/Â½/g, '½')
    .replace(/Ãœ/g, 'Ü')
    .replace(/Ã±/g, 'ñ')
    .replace(/Â/g, '')
  return string;
}

function fixDataCharacters(data) {
  for (let prop in data) {
    if (data.hasOwnProperty(prop)) {
      if (typeof(data[prop]) === 'string') {
        data[prop] = fixDataCharactersInString(data[prop]);
      }
      let fixedPropName = fixDataCharactersInString(prop);
      if (prop !== fixedPropName) {
        data[fixedPropName] = data[prop];
        delete data[prop];
      }
    }
  }

  return data;
}

function generateCollections(file_path) {

  console.log('generateCollections: ' + file_path);

  let input = fs.readFileSync(file_path, 'utf8'); // https://nodejs.org/api/fs.html#fs_fs_readfilesync_file_options
  let records = parse(input, {columns: true}); // http://csv.adaltas.com/parse/examples/#using-the-synchronous-api

  records.sort((a, b) => {
    // a is less than b by some ordering criterion
    if (a['Project Title'] > b['Project Title']) {
      return -1
    }
    // a is greater than b by the ordering criterion
    if (a['Project Title'] < b['Project Title']) {
      return 1
    }
    // a must be equal to b
    return 0
  })

  for (let index = 0; index < records.length; index++) {
    let data = fixDataCharacters(records[index]);
    createMarkdownFile(data);
  }
  return records;
}

generateCollections('./Batch 1 2019 Grants Challenge 3_20 - Sheet6.csv');

