var gulp = require("gulp");
var connect = require("gulp-connect");
var open = require("gulp-open");
var concat = require("gulp-concat");
var browserify = require("browserify");
var reactify = require("reactify");
var source = require("vinyl-source-stream");
var lint = require("gulp-eslint");

var config = {
  port: 7005,
  baseUrl: 'http://localhost',
  paths: {
    html: './src/index.html',
    dist: './dist/',
    mainJs: './src/app.js',
    css : [
      './node_modules/bootstrap/dist/css/bootstrap.min.css',
      './node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
      './node_modules/toastr/build/toastr.min.css'
    ],
    js : './src/**/*.js',
    mainJs : './src/app.js',
    images : './src/images/*'
  }
}

gulp.task("connect", function() {
  connect.server({
    root: [config.paths.dist],
    base: config.baseUrl,
    port: config.port,
    livereload: true
  })
});

gulp.task('open', ['connect'], function() {
  gulp.src(config.paths.dist)
    .pipe(open({
      uri: config.baseUrl + ':' + config.port + '/'
    }))
});

gulp.task('html', function(){
  gulp.src(config.paths.html)
    .pipe(gulp.dest(config.paths.dist))
    .pipe(connect.reload())
});

gulp.task('js', function() {
  browserify(config.paths.mainJs)
    .transform(reactify)
    .bundle()
    .on('error', console.error.bind(console))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(config.paths.dist + '/scripts'))
    .pipe(connect.reload())
});

gulp.task('css', function() {
  gulp.src(config.paths.css)
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest(config.paths.dist + '/css'))
});

gulp.task('lint', function() {
  return gulp.src(config.paths.js)
          .pipe(lint({config: 'eslint.config.json'}))
          .pipe(lint.format())
});

gulp.task('images', function() {
  gulp.src('./favicon.ico')
    .pipe(gulp.dest(config.paths.dist))
    .pipe(connect.reload());
})

gulp.task('watch', function() {
  gulp.watch(config.paths.html, ['html']);
  gulp.watch(config.paths.js, ['js', 'lint']);
});

gulp.task('default', ['html', 'css', 'js', 'images', 'lint', 'open', 'watch']);