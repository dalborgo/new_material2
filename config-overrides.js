const {addBabelPlugin, override} = require('customize-cra')

module.exports = override(
  addBabelPlugin(['@babel/plugin-proposal-optional-chaining']),
)