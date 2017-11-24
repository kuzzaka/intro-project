module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    concat: {
      js: {
        files: {
          'build/js/full.js': ['node_modules/lodash/lodash.js',
            'node_modules/jquery/dist/jquery.js',
            'node_modules/backbone/backbone.js',
            'src/js/application/*.js',
            'src/js/components/*.js',
          ],
          'lib/full.js': ['src/js/components/*.js'],
        },
      },
    },
    watch: {
      scripts: {
        files: ['lib/*.js', 'spec/*.spec.js'],
        tasks: ['jasmine'],
        options: {
          livereload: true,
        },
      },
      js: {
        tasks: ['concat'],
        files: ['src/js/components/*.js', 'src/js/application/*.js'],
      },
      scss: {
        tasks: ['concat'],
        files: ['src/css/*.scss'],
      },
    },
    sass: {
      dist: {
        files: {
          'build/css/styles.css': ['src/css/*.scss'],
        },
      },
    },
    jasmine: {
      test: {
        src: 'lib/*.js',
        options: {
          vendor: [
            'node_modules/jquery/dist/jquery.js',
            'node_modules/lodash/lodash.js',
            'node_modules/backbone/backbone.js',
            'node_modules/jasmine-jquery/lib/jasmine-jquery.js',
          ],
          specs: 'spec/*.spec.js',
          template: 'spec/popup-view.tmpl',
        },
      },
    },
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.registerTask('default', ['newer:concat:js',
    'newer:sass:dist',
    'watch', 'jasmine:build',
  ]);
};
