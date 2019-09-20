const createPlugin = require('./src/createPlugin');
const createModel = require('./src/createModel');

module.exports = {
  createPlugin,
  getModel: createModel
};
