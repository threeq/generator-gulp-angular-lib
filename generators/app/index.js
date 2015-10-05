'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var generators = yeoman.generators;

module.exports = yeoman.generators.Base.extend({
    constructor: function () {
        generators.Base.apply(this, arguments);

    },
    initializing: function () {

    },
    prompting: function () {
        var done = this.async();

        // Have Yeoman greet the user.
        this.log(yosay(
            'Welcome to the cat\'s pajamas ' + chalk.red('GulpWebappLib') + ' generator!'
        ));

        var prompts = [{
            type: 'input',
            name: 'lib_name',
            message: 'lib name: ',
            default: 'angular-lib'
        },{
            type: 'input',
            name: 'lib_version',
            message: 'lib version: ',
            default: '0.1.0'
        },{
            type: 'input',
            name: 'lib_keys',
            message: 'lib keys: ',
            default: 'angular,lib'
        },{
            type: 'input',
            name: 'lib_authors_name',
            message: 'lib authors name: ',
            default: 'example'
        },{
            type: 'input',
            name: 'lib_authors_email',
            message: 'lib author email: ',
            default: 'example@example.com'
        }
        ];

        this.prompt(prompts, function (props) {
            this.props = props;
            // To access props later use this.props.someOption;

            done();
        }.bind(this));
    },

    writing: {
        app: function () {
            this.fs.copy(
                this.templatePath('resources/src'),
                this.destinationPath('src')
            );
            this.fs.copy(
                this.templatePath('resources/test'),
                this.destinationPath('test')
            );
            this.fs.copy(
                this.templatePath('resources/bin'),
                this.destinationPath('bin')
            );
        },
        gitfiles: function () {
            this.copy('gitattributes', '.gitattributes');
            this.copy('gitignore', '.gitignore');
        },
        gulpfiles: function () {
            this.fs.copyTpl(
                this.templatePath('gulpfile.js'),
                this.destinationPath('gulpfile.js'),
                this.props
            );
            this.fs.copy(
                this.templatePath('gulp'),
                this.destinationPath('.gulp')
            );
        },
        testfiles: function () {
            this.fs.copy(
                this.templatePath('karma.conf.js'),
                this.destinationPath('karma.conf.js')
            );

            this.fs.copy(
                this.templatePath('protractor.conf.js'),
                this.destinationPath('protractor.conf.js')
            );
        },
        projectfiles: function () {
            this.template('_package.json', 'package.json', this.props);
            this.template('_bower.json', 'bower.json', this.props);
            this.template('bowerrc', '.bowerrc');
            this.template('editorconfig', '.editorconfig');
            this.template('jshintrc', '.jshintrc');
            this.template('_travis.yml', '.travis.yml');
            this.template('README.md');

            this.template('yo-rc.json', '.yo-rc.json');
            this.template('_travis.yml', '.travis.yml');

        }
    },

    install: function () {
        //this.installDependencies();
    }
});
