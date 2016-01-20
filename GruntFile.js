module.exports = function (grunt) {
    var liveReloadPort = 11335;

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    //the port we want our localhost to run on
                    port: 9001,

                    //this matches with the folder in which you want to server
                    //your html/js code.
                    base: 'app',

                    //This tells 
                    livereload: liveReloadPort
                }
            }
        },
        watch: {
            options: {
                //grunt watch already has live reload built in.  
                //Here we are enabling it.
                livereload: liveReloadPort
            },
            code: {
                //list all the files to watch for changes.
                files: ['app/index.html', 'app/js/*.*', 'app/js/**/*.*'],
                tasks: ['build-ui']
            }
        },
        concat: {
            options: {
                sourceMap: true
            },
            dist: {
                src: ['app/dest/js/*.js', 'app/dest/js/**/*.js'],
                dest: 'app/dest/all.js'
            }
        },
        ngAnnotate: {
            options: {
                singleQuotes: true
            },
            app: {
                files: [{
                    expand: true,
                    src: ['app/js/*.js', 'app/js/**/*.js'],
                    //dest: ''
                    rename: function (dest, src) {
                        return src.replace("app/js", "app/dest/js");
                    }
					
                    //'app/dest/all.js': ['app/dest/all.js']
                }]

                //files: [
                //	{
                //		expand: true,
                //		src: ['app/**/*.js'],
                //		dest: 'app/dest',
                //		ext: '.annotated.js', // Dest filepaths will have this extension.
                //		extDot: 'last'       // Extensions in filenames begin after the last dot
                //	}
                //]
            }
        },
        uglify: {
            my_target: {
                options: {
                    compress: true,
                    mangle: true,
                    beautify: false,
                    sourceMap: true,
                    sourceMapIncludeSources: true,
                    sourceMapIn: 'app/dest/all.js.map'
                },
                files: {
                    'app/dest/all.min.js': ['app/dest/all.js']
                }
            }
        },
        open: {
            dev: {
                path: 'http://127.0.0.1:9001/'            
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-ng-annotate');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-open');

    // Default task(s).
    grunt.registerTask('build-ui', ['ngAnnotate', 'concat', 'uglify']);
    grunt.registerTask('default', ['build-ui', 'connect', 'open', 'watch']);
};