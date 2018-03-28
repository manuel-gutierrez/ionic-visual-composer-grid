module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      cssmin : {
        target : {
            src : ["./src/assets/css/vc-style.css"],
            dest : "./src/assets/css/vc-style.min.css"
         }
        }
    });
  
	//load cssmin plugin
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	//create default task
	grunt.registerTask("default", ["cssmin"]);


  
  };
