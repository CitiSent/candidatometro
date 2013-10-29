module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Compress and uglify the file candidatometro.js
        uglify: {
            candidatometro: {
                options: {
                    report: 'min',
                    mangle: true
                },
                files: {
                    'js/candidatometro.min.js': 'js/candidatometro.js'
                }
            }
        },

        // Concatenate the minified files
        concat: {
            dist: {
                src: [
                    'js/lib/underscore-min.js',
                    'js/lib/backbone-min.js',
                    'js/lib/d3.v3.min.js',
                    'js/candidatometro.min.js'
                ],
                dest: 'js/datavis.js'
            }
        }

    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Default task(s).
    grunt.registerTask('dist', ['uglify', 'concat']);
};