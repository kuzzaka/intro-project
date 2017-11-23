module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    concat: {
      js: {
        src: ['node_modules/lodash/lodash.js',
              'node_modules/jquery/dist/jquery.js',
              'node_modules/backbone/backbone.js',
              'src/js/*.js'],
        dest: 'build/js/full.js',
      },
    },
    watch: {
      js: {
        tasks: ['concat'],
        files: ['src/js/*.js'],
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
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-newer');
  grunt.registerTask('default', ['newer:concat:js',
  'newer:sass:dist',
  'watch']);
};
