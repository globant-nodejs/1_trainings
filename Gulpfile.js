var gulp = require('gulp');
var shell = require('gulp-shell');
var downloadatomshell = require('gulp-download-atom-shell');

gulp.task('downloadatomshell', function(cb){
    downloadatomshell({
        version: '0.17.2',
        outputDir: 'binaries'
    }, cb);
});

gulp.task('demo', shell.task([
    'binaries/Atom.app/Contents/MacOS/Atom main.js'
]));

gulp.task('democ', shell.task([
    'binaries/Atom.app/Contents/MacOS/Atom main.js components/' + gulp.env.comp + '/demo.html'
]));

gulp.task('default', [ 'downloadatomshell' ]);