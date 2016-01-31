var gulp = require('gulp');
var ts = require('gulp-typescript');
var nodemon = require('nodemon');

var paths = {
    ts: ['app/typings/**/*.ts', 'app/**/*.ts'],
    templates: ['app/**/*.html'],
    styles: ['app/**/*.css']
};

gulp.task('ts', function () {
    return gulp.src(paths.ts)
        .pipe(ts({
            'module': 'commonjs',
            'experimentalDecorators': true,
            'emitDecoratorMetadata': true,
            'target': 'ES5'
        })).js
        .pipe(gulp.dest('build'));
});

gulp.task('templates', function () {
    return gulp.src(paths.templates)
        .pipe(gulp.dest('build'));
});

gulp.task('styles', function () {
    return gulp.src(paths.styles)
        .pipe(gulp.dest('build'));
});

gulp.task('watcher', ['ts', 'templates', 'styles'], function () {
    gulp.watch(paths.ts, ['ts']);
    gulp.watch(paths.templates, ['templates']);
    gulp.watch(paths.styles, ['styles']);
});

gulp.task('default', ['watcher'], function () {
    nodemon({
      script: 'server.js'
    })
});
