# grunt-compress-joomla [![Build Status](https://travis-ci.org/renekorss/grunt-compress-joomla.svg?branch=master)](https://travis-ci.org/renekorss/grunt-compress-joomla)

> Compresses Joomla! extensions

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-compress-joomla --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-compress-joomla');
```

## Compress task

### Overview
In your project's Gruntfile, add a section named `compress_joomla` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  compress_joomla: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Extension data

#### extensionName
Type: `String`

This must be folder name of extension. For example `com_example` for `component`.

#### extensionType
Type: `String`

Automatically detected from `extensionName` (supported: `component`, `module`, `plugin`). Can be overridden and is required for `template` and `language`.

Possible values: `component`, `module`, `plugin`, `template` and `language`.

### Options

You can use all [grunt-contrib-compress options](https://github.com/gruntjs/grunt-contrib-compress).

#### archive
Type: `String` or `Function`
Modes: `zip` `tar`

This is used to define where to output the archive. Each target can only have one output file.
If the type is a Function it must return a String.

*This option is only appropriate for many-files-to-one compression modes like zip and tar.  For gzip for example, please use grunt's standard src/dest specifications.*

#### mode
Type: `String`

This is used to define which mode to use, currently supports `gzip`, `deflate`, `deflateRaw`, `tar`, `tgz` (tar gzip) and `zip`.

Automatically detected per dest:src pair, but can be overridden per target if desired.

#### level
Type: `Integer`
Modes: `zip` `gzip`
Default: 1

Sets the level of archive compression.

#### pretty
Type: `Boolean`
Default: `false`

Pretty print file sizes when logging.

### File Data

The following additonal keys may be passed as part of a dest:src pair when using an Archiver-backed format.
All keys can be defined as a `Function` that receives the file name and returns in the type specified below.

#### date
Type: `Date`
Modes: `zip` `tar` `tgz`

Sets the file date.

#### mode
Type: `Integer`
Modes: `zip` `tar` `tgz`

Sets the file permissions.

#### store
Type: `Boolean`
Modes: `zip`

If true, file contents will be archived without compression.

#### comment
Type: `String`
Modes: `zip`

Sets the file comment.

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
  compress_joomla: {
    options: {

    },
    extensionName: 'com_example',
    extensionType: 'component',
  },
});
```

#### Custom Options
In this example, custom options are used to do something else with whatever else. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result in this case would be `Testing: 1 2 3 !!!`

```js
grunt.initConfig({
  compress_joomla: {
    options: {
      mode: 'zip',
      punctuation: ' !!!',
    },
    extensionName: 'com_example',
    extensionType: 'component',
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
