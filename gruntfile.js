module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    concat: {
      js: {
        src: ['node_modules/lodash/lodash.js',
              'node_modules/jquery/dist/jquery.js',
              'node_modules/backbone/backbone.js',
              'src/js/*.js'],
        dest: 'build/js/scripts.js',
      },
    },
    watch: {
      js: {
        files: ['src/js/*.js'],
      },
      scss: {
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
  grunt.registerTask('default', ['concat', 'sass', 'watch']);
};

//grunt newer
