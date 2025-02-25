const { PluginWebpackConfig } = require('graylog-web-plugin');
const { loadBuildConfig } = require('graylog-web-plugin');
const path = require('path');

// Remember to use the same name here and in `getUniqueId()` in the java MetaData class
module.exports = new PluginWebpackConfig(__dirname, 'com.kongz.graylog.plugins.slack.SlackNotificationPlugin', loadBuildConfig(path.resolve(__dirname, './build.config')), {
  // Here goes your additional webpack configuration.
});