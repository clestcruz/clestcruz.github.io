module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    //SASS
    sass: {
      dist: {
        files: {
          'style.css' : 'scss/style.scss'
        }
      }
    },

    //UGLIFY
    uglify: {
      build: {
        src: ['js/main.js'], //Input
        dest: 'js/build/main-min.js' //Output
      },
    },



    //CSS COMPILE
    cssmin: {
        build: {
          src: ['css/skeleton.css', 'style.css'], //Input
          dest:'css-min.css' //Output
        },
      },

     //GRUNT WATCH
     watch: {

         //JAVASCRIPT
         scripts: {
            files: ['js/main.js'],
            tasks: ['uglify'],
            options: {
                spawn: false,
            },
          },

         //CSS
         css: {
           files: ['scss/style.scss', 'style.css'],
           tasks: ['sass', 'cssmin'],
           options:{
              spawn: false,
             },
          },
     },
  });

  /* Load the plugin that provides the task.
  Remove comment tag to enable grunt plugins */


  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  /* Default task(s).
  Remove comment tag to enable grunt task */

  grunt.registerTask('default', ['uglify', 'sass', 'cssmin', 'watch']);

};
