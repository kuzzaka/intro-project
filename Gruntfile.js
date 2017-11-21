module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        uglify: {
            'js/scripts.js': ['src/js/*.js']
        },
        watch: {
            js: {
                files: ['src/js/*.js']
            },
            scss: {
                files: ['src/css/*.scss']
            },
        },
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'css/styles.css': ['src/css/*.scss']
                }
            }
        },
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');
    grunt.registerTask('default', ['uglify', 'sass', 'watch']);

};
