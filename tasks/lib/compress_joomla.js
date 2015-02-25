/*
 * grunt-compress-joomla
 * https://github.com/renekorss/grunt-compress-joomla
 *
 * Copyright (c) 2015 Rene Korss
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  var exports = {
    options: {}
  };

  // Compress component
  exports.component = function(done) {

  }

  // Compress module
  exports.module = function(done) {
    // TO DO
  }

  // Compress plugin
  exports.plugin = function(done) {
    // TO DO
  }

  // Compress template
  exports.template = function(done) {
    // TO DO
  }

  // Compress language
  exports.language = function(done) {
    // TO DO
  }

  // Automatically detects extension type (component, module or plugin) from extension name
  exports.autoDetectExtensionType = function(extensionName) {
    if (exports.options.extensionType) {
      return exports.options.extensionType;
    }

    if (_.startsWith(extensionName, 'com_')) {
      return 'component';
    }

    if (_.startsWith(extensionName, 'mod_')) {
      return 'module';
    }

    if (_.startsWith(extensionName, 'plg_')) {
      return 'plugin';
    }

    grunt.fail.warn('Can not automatically detect extension type. Please specify ' + String('extensionType').cyan + ' in options.');
  };

  return exports;
};