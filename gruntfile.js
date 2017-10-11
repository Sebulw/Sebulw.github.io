module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'css/style.css': 'sass/style.sass'
        }
      }
    },

    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'images/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'build/'
        }]
      }
    },

    watch: {
      scripts: {
          files: ['sass/style.sass', 'css/style.css'],
          tasks: ['sass'],
          options: {
              spawn: false,
          },
      }
    },

    browserSync: {
        bsFiles: {
            src : ['index.html', 'sass/style.sass', 'css/style.css', 'js/scripts.js']
        },
        options: {
            server: {
                baseDir: ["sass/", "css/", "js/"]
            },
            watchTask: true
        }
    },

    jshint: {
      all: ['js/*.js']
    }
  });
  // Load the plugins tasks
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  // Default task(s).

  grunt.registerTask('default', ['sass', 'imagemin', 'browserSync', 'watch']);
  grunt.registerTask('hint', ['jshint']);
};