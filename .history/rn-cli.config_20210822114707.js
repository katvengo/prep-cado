

const blacklist = require('metro-config/src/defaults/exclusionList');

// blacklist is a function that takes an array of regexes and combines
// them with the default blacklist to return a single regex.

module.exports = {
  resolver: {
    blacklistRE: blacklist([/#current-cloud-backend\/.*/])
  }
};

// module.exports = {
//   resolver: {
//     blacklistRE: /amplify\/.*/
//   }
//  };