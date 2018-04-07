
'use strict';

let fs = require('fs');
let yaml = require('js-yaml');

function getYaml(text, filename) {
  const DELIMITER = '---';
  let items = text.split(DELIMITER);
  if (items.length === 3) {
    return items[1];
  } else {
    console.log('unexpected markdown format detected');
    console.log(items.length);
    console.log(text);
    console.log(filename);
  }
}

function getContent(text, filename) {
  const DELIMITER = '---';
  let items = text.split(DELIMITER);
  if (items.length === 3) {
    return items[2];
  } else {
    console.log('unexpected markdown format detected');
    console.log(items.length);
    console.log(text);
  }
}

function loadMarkdown(filename) {
  let input = fs.readFileSync(filename, 'utf8'); // https://nodejs.org/api/fs.html#fs_fs_readfilesync_file_options

  // Get document, or throw exception on error 
  try {
    let text = fs.readFileSync(filename, 'utf8');
    let yamlText = getYaml(text, filename);
    let contentText = getContent(text, filename);

    if (!yamlText || !contentText) return;

    let data = {}
    data.yaml = yaml.safeLoad(yamlText);
    data.content = contentText;
    return data;

  } catch (e) {
    console.log(e);
  }
}

function saveMarkdown(filename, data) {
  // console.log('filename')
  // console.log(filename);

  // console.dir(data);

  // https://www.npmjs.com/package/js-yaml#safedump-object---options-
  let output =
`---
${yaml.safeDump(data.yaml)}
---
`
// ${data.content}

//console.log(output);
//return;

  fs.writeFileSync(filename, output, 'utf8', (err) => {
    if (err) {
      console.log(err);
    }
  });
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
  console.log('parsing JSON string: ' + string);
  console.log('');
  console.log('');
  console.log('');
  return JSON.parse(string);
}

function convertStringsToJSON(data) {
  console.log('before: ' + data.category_metrics);
  data.category_metrics = getArrayFromString(data.category_metrics);
  console.log('after: ' + data.category_metrics);
  console.log('before: ' + data.category_other);
  data.category_other   = getArrayFromString(data.category_other);
  console.log('after: ' + data.category_metrics);
  return data;
}

function processFile(filename) {

  // Load the contents of the file
  let data = loadMarkdown(filename);
  if (!data) return;

  // delete data.yaml.project_proposal_impact;
  // delete data.yaml.unique_identifier;

  // data.yaml = convertStringsToJSON(data.yaml)

  saveMarkdown(filename, data);

}

// https://stackoverflow.com/questions/20822273/best-way-to-get-folder-and-file-list-in-javascript#21459809
function getAllFilesFromFolder(dir) {

    let filesystem = require("fs");
    let results = [];

    filesystem.readdirSync(dir).forEach(function(file) {

        file = dir+'/'+file;
        let stat = filesystem.statSync(file);

        if (stat && stat.isDirectory()) {
            results = results.concat(_getAllFilesFromFolder(file))
        } else results.push(file);

    });

    return results;

};

function updateMarkdownFiles(folder) {
  let files = getAllFilesFromFolder(folder);

  //console.log(files);

  // For each location file
  for (let index = 0; index < files.length; index++) {
    if (files[index].indexOf('.DS_Store') >= 0) continue;
    processFile(files[index]);
  }
}

updateMarkdownFiles('./_learn');
updateMarkdownFiles('./_create');
updateMarkdownFiles('./_play');
updateMarkdownFiles('./_connect');
updateMarkdownFiles('./_live');
