/*
 * grunt-compress-joomla
 * https://github.com/renekorss/grunt-compress-joomla
 *
 * Copyright (c) 2015 Rene Korss
 * Licensed under the MIT license.
 */

'use strict';

var _ = require('lodash');

module.exports = function(grunt) {
  var compressJoomla = require('./lib/compress_joomla')(grunt);

  grunt.registerMultiTask('compress_joomla', 'Compresses Joomla! extensions', function() {
    compressJoomla.options = this.options({
      
    });

    // Get extension type, if not set, detect automatically from extension name
    this.extensionType = this.extensionType || compressJoomla.autoDetectExtensionType(this.extensionName);

    // Check for extension name
    if (String(this.extensionName).length === 0) {
      grunt.fail.fatal('Extension name is required.');
    }

    // Check for correct extension type
    // Possible extension types: 'component', 'module', 'plugin', 'template', 'language'
    if (_.includes(['component'], this.extensionType) === false) {
      grunt.fail.warn('Extension type ' + String(this.extensionType).cyan + ' not supported.');
    }

    // Compress extension
    compressJoomla[this.extensionType](this.async());
  });
};
