'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var _ = require('lodash');

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the super-excellent ' + chalk.red('generator-expressjs-typescript') + ' generator!'
    ));

    var done = this.async();

    var prompts = [{
      type: 'input',
      name: 'appname',
      message: 'Project name',
      default: this.appname
    }];

    return this.prompt(prompts).then(function (props) {
      this.props = props;
      done();
    }.bind(this));
  },

  writing: function () {
    this.fs.copy(
      this.templatePath('dummyfile.txt'),
      this.destinationPath('dummyfile.txt')
    );
    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'), {
          appname: this.props.appname
      }
    );
  },

  install: function () {
    this.installDependencies();
  }
});
