const path = require('path');

const config = path.resolve(__dirname, '../../.eslintrc.js');
module.exports = {
  extends: [
    config,
  ],
};
