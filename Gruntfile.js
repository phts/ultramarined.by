module.exports = function(grunt) {
  grunt.initConfig({

    watch: {
      sass: {
        files: "scss/*.scss",
        tasks: ['sass']
      }
    },

    sass: {
      dev: {
        files: {
          "css/app.css": "scss/app.scss"
        }
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
};
