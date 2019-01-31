var fs = require('fs');
var path = require('path');
var ncp = require('ncp').ncp;

ncp.limit = 16;

var sidebars = {};
var headerLinks = [];
var PATH = path.join(__dirname, '../../docs');

function readDirectory(directory, callback) {
  fs.readdir(directory, function(err, files) {
    if (err) {
      console.error('Could not list the directory.', err);
      process.exit(1);
    }

    callback(files);
  });
}

function readJSON(jsonPath, callback) {
  fs.readFile(jsonPath, 'utf8', function(err, data) {
    if (err) throw err;
    try {
      var json = JSON.parse(data);
      callback(json);
    } catch (e) {
      throw e;
    }
  });
}

function isDirectory(directoryPath, callback) {
  fs.stat(directoryPath, function(error, stat) {
    if (error) {
      console.error('Error stating file.', error);
      return;
    }

    callback(stat.isDirectory());
  });
}

function generateSidebar(meta, pathToPrepend) {
  var generatedConfig = {};
  var sidebarConfig = meta.sidebar;
  Object.keys(sidebarConfig).map(function(sidebarSection) {
    generatedConfig[sidebarSection] = sidebarConfig[sidebarSection].map(function(sidebarPage) {
      return pathToPrepend.split(PATH)[1].substring(1) + '/' + sidebarPage;
    });
  });

  return generatedConfig;
}

function generateHeaderLink(meta, pathToPrepend) {
  var headerLink = meta.headerLink;
  return {
    doc: pathToPrepend.split(PATH)[1].substring(1) + '/' + headerLink.doc,
    label: headerLink.label
  };
}

function writeToFile(json, filePath, callback) {
  fs.writeFile(filePath, JSON.stringify(json, null, 2), 'utf8', callback);
}

function _generate(docsPath, directory) {
  readDirectory(docsPath, function(files) {
    files.forEach(function(file, index) {
      var filePath = path.join(docsPath, file);
      isDirectory(filePath, function(isDirectory) {
        if (isDirectory) {
          _generate(filePath, file);
        } else if (file === 'meta.json') {
          readJSON(filePath, function(json) {
            sidebars[directory] = generateSidebar(json, docsPath);
            // headerLinks.push(generateHeaderLink(json, docsPath));
            writeToFile(sidebars, path.join(__dirname, '../sidebars.json'), function() {});
            // writeToFile(headerLinks, path.join(__dirname, '../headerLinks.json'), function() {});
          });
        }
      });
    });
  });
}

function _moveAssets(docsPath) {
  readDirectory(docsPath, function(files) {
    files.forEach(function(file, index) {
      var filePath = path.join(docsPath, file);
      isDirectory(filePath, function(isDirectory) {
        if (isDirectory && file === 'assets') {
          ncp(filePath, PATH + '/assets/');
        } else if (isDirectory) {
          _moveAssets(filePath);
        }
      });
    });
  });
}

function generate() {
  _generate(PATH, 'docs');
  // _moveAssets(PATH);
}

generate();

// module.exports = {
//   generate: generate
// };
