module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        concat: {
            js: {
                src: ['src/js/*.js'],
                dest: 'js/scripts.js',
            }
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
            dist: {
                files: {
                    'css/styles.css': ['src/css/*.scss']
                }
            }
        },
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.registerTask('default', ['concat', 'sass', 'watch']);

};