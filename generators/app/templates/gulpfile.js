'use strict';

var gulp = require('gulp');
gulp.appName = '<%= lib_name %>';
gulp.moduleName = '<%= lib_name %>';

gulp.paths = {
    src: 'src',
    dist: 'dist',
    tmp: '.tmp',
    e2e: 'test/e2e',
    unit: 'test/unit',
    test_server:'test/serve',
    docs: 'docs',
    reports: 'reports'
};

require('require-dir')('./.gulp');

gulp.task('default', ['clean'], function () {
    gulp.start('build');
});
