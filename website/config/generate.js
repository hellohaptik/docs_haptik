var fs = require('fs');
var path = require('path');
var ncp = require('ncp').ncp;

ncp.limit = 16;

var sidebars = {};
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

function _rimraf(dir_path) {
  if (fs.existsSync(dir_path)) {
    fs.readdirSync(dir_path).forEach(function(entry) {
      var entry_path = path.join(dir_path, entry);
      if (fs.lstatSync(entry_path).isDirectory()) {
        _rimraf(entry_path);
      } else {
        fs.unlinkSync(entry_path);
      }
    });
    fs.rmdirSync(dir_path);
    fs.mkdirSync(dir_path);
  }
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

function writeToFile(json, filePath) {
  fs.writeFileSync(filePath, JSON.stringify(json, null, 2), 'utf8');
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
            writeToFile(sidebars, path.join(__dirname, '../sidebars.json'));
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
  _rimraf(PATH + '/assets/');
  _moveAssets(PATH);
}

generate();

// module.exports = {
//   generate: generate
// };
