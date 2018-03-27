module.exports = function(grunt) {
 grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

            sass: {
                options: {
                sourcemap: 'none',
                noCache: true,
                    },
                dist: {
                    files: [{
                    expand: true,
                      cwd: './src/static/scss/',
                      src: ['**/*.scss'],
                     dest: './src/static/css/',
                       ext: '.css'
                 }]
            }
           },


            watch: {
                css: {
                    files: './src/static/scss/*.scss',
                 tasks: ['sass','dist']
              }
          },
        });

       grunt.loadNpmTasks('grunt-contrib-sass');
       grunt.loadNpmTasks('grunt-contrib-watch');
       grunt.registerTask('default', ['sass', 'watch']);

    };