module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        copy: {
            bkConfigFile :{
                files: [
                    {src: 'app/config.js', dest: 'app/config-dev.js'},
                    {src: 'app/config-prd.js', dest: 'app/config.js'}
                ]
            },
            rollbackConfigFile :{
                files: [
                    {src: 'app/config.js', dest: 'app/config-prd.js'},
                    {src: 'app/config-dev.js', dest: 'app/config.js'},
                ]
            },
            dist: {
                files: [ {src: 'index.html', dest: 'dist/index.html'} ]
            },
            updateIndex: {
                files: [ {src: 'dist/index.html', dest: 'index.html'} ]
            },
            updateReference: {
                files: [
                    {src: 'dist/dist/fishu.min.css', dest: 'dist/fishu.min.css'},
                    {src: 'dist/dist/fishu.min.js', dest: 'dist/fishu.min.js'}
                ]
            }
        },

        'useminPrepare': {
            options: {
                dest: 'dist'
            },
            html: 'index.html'
        },

        usemin: {
            html: ['dist/index.html']
        },

        cachebreaker: {
            dev: {
                options: {
                    match: ['dist/smartbeemo.min.css', 'dist/smartbeemo.min.js']
                },
                files: {
                    src: ['dist/index.html']
                }
            }
        },

        uglify:{
            generated: {
                options: {
                    mangle: false
                }
            }
        },

        'updateIndex': {
            copy: {
                dist: {
                    files: [ {src: 'dist/index.html', dest: 'index.html'} ]
                }
            }
        },

        clean: {
            build: {
                src: [".tmp"]
            },
            js: ["app/config-dev.js"]
        },

        replace: {
            to_prod: {
                src: ['app/config.js'],
                overwrite: true,
                replacements: [{
                    from: "var environment = 'development';",
                    to: "var environment = 'production';"
                }]
            },
            to_dev: {
                src: ['app/config.js'],
                overwrite: true,
                replacements: [{
                    from: "var environment = 'production';",
                    to: "var environment = 'development';"
                }]
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-cache-breaker');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-text-replace');


    grunt.registerTask('default', [
        //'copy:bkConfigFile',
        'replace:to_prod',
        'useminPrepare',
        'copy:dist',
        'concat',
        'cssmin',
        'uglify',
        'usemin',
        'cachebreaker',
        //'copy:updateIndex',
        'copy:updateReference',
        //'copy:rollbackConfigFile',
        'clean',
        'replace:to_dev'
    ]);
};