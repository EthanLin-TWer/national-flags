module.exports = function(grunt) {

  grunt.initConfig({
      less: {
          files: {
              'dist/css/national-flags.css': 'less/french/french.less'
          },
          options: {
              compress: true
          }
      },
      watch: {
          files: ['less/**/*.less'],
          tasks: ['less']
      }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['less']);
};
