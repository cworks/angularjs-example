'use strict';

module.exports = function (grunt) {

    grunt.initConfig({
        browserSync: {
            bsFiles: {
                src : [
                    './*.html',
                    'css/*.css',
                    'js/*.js'
                ]
            },
            options: {
                server: {
                    baseDir: "./"
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-browser-sync');

    grunt.registerTask('serve', [
        'browserSync'
    ]);

    grunt.registerTask('default', ['serve']);
};
