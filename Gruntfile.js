// Gruntfile
//
// Create minified and concatenate versions of the JavaScript files.
//
// Usage:
//
//    grunt uglify
//    grunt concat
//

module.exports = function(grunt) {
    'use strict';

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Uglyfy and minimize JavaScript Components
        uglify: {
            // Candidatometro
            candidatometro: {
                options: {
                    report: 'min',
                    mangle: true
                },
                files: {
                    'js/candidatometro.min.js': 'js/candidatometro.js'
                }
            },
            // Bootstap Components
            bootstrap: {
                options: {
                    report: 'min'
                },
                files: {
                    'js/bootstrap-comp.min.js': [
                        'js/dropdown.js',
                        'js/collapse.js',
                        'js/carousel.js',
                        'js/transition.js'
                    ]
                }
            }
        },

        // Concatenate the minified files
        concat: {
            // Data Visualization Files
            datavis: {
                src: [
                    'js/lib/underscore-min.js',
                    'js/lib/backbone-min.js',
                    'js/lib/d3.v3.min.js',
                    'js/candidatometro.min.js'
                ],
                dest: 'js/datavis.min.js'
            },
            // Site Files
            site: {
                src: ['js/lib/jquery-2.0.3.min.js', 'js/bootstrap-comp.min.js'],
                dest: 'js/site.min.js'
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Default task(s).
    grunt.registerTask('dist', ['uglify', 'concat']);
};