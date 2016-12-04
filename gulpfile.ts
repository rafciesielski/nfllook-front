"use strict";

const gulp = require("gulp");
const del = require("del");
const runSequence = require('run-sequence');
const tsc = require("gulp-typescript");
const sourcemaps = require('gulp-sourcemaps');
const tsProject = tsc.createProject("tsconfig.json");
const tslint = require('gulp-tslint');
const KarmaServer = require('karma').Server;
const zip = require('gulp-zip');

gulp.task('clean', (cb) => {
    return del(["build", "dist", "report"], cb);
});

gulp.task('tslint', () => {
    return gulp.src("src/**/*.ts")
        .pipe(tslint({
            formatter: 'prose'
        }))
        .pipe(tslint.report());
});

gulp.task("compile", ["tslint"], () => {
    let tsResult = gulp.src("src/**/*.ts")
        .pipe(sourcemaps.init())
        .pipe(tsc(tsProject));
    return tsResult.js
        .pipe(sourcemaps.write(".", { sourceRoot: '/src' }))
        .pipe(gulp.dest("build"));
});

gulp.task("resources", () => {
    return gulp.src(["src/**/*", "!**/*.ts"])
        .pipe(gulp.dest("build"));
});

gulp.task("libs", () => {
    return gulp.src([
        'core-js/client/shim.min.js',
        'systemjs/dist/system-polyfills.js',
        'systemjs/dist/system.src.js',
        'reflect-metadata/Reflect.js',
        'rxjs/**',
        'zone.js/dist/**',
        '@angular/**'
    ], { cwd: "node_modules/**" })
        .pipe(gulp.dest("build/lib"));
});

gulp.task('watch', () => {
    gulp.watch(["src/**/*.ts"], ['compile']).on('change', (file) => {
        console.log('TypeScript file ' + file.path + ' has been changed. Compiling.');
    });
    gulp.watch(["src/**/*.html", "src/**/*.css"], ['resources']).on('change', (file) => {
        console.log('Resource file ' + file.path + ' has been changed. Updating.');
    });
});

gulp.task("build", (done) => {
    runSequence('clean', ['compile', 'resources', 'libs'], done);
});

gulp.task("test", ["build"], (done) => {
    new KarmaServer({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done).start();
});

gulp.task('testWatch', ["build"], (done) => {
    new KarmaServer({
        configFile: __dirname + '/karma.conf.js'
    }, done).start();
});

gulp.task("beanstalk", ["build"], () => {
    return gulp.src(["etc/beanstalk/package.json"])
        .pipe(gulp.dest("build"));
});

gulp.task('dist-beanstalk', ["beanstalk"], () => {
    return gulp.src('build/**/*')
        .pipe(zip('nfllook-front_' + new Date().getTime() +'.zip'))
        .pipe(gulp.dest('dist'));
});
