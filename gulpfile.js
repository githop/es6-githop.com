(function() {
  'use strict';

  var gulp = require('gulp');
  var path = require('path');
  var jspm = require('jspm');
  var del  = require('del');
  var rename = require('gulp-rename');
  var uglify = require('gulp-uglify');
  var htmlReplace = require('gulp-html-replace');
  var ngAnnotate = require('gulp-ng-annotate');
  var serve = require('browser-sync');
  var manifest = require('gulp-manifest');

  var root = 'client';

  var pathHelper = function(clipath) {
    return function(glob) {
      glob = glob || '';
      return path.join(root, clipath, glob);
    };
  };

  var appPath = pathHelper('githop'); //client/githop/{blob}
  var components = pathHelper('githop/components'); //githop/components/{blob}

  var paths = {
    js: appPath('**/*.js'),
    css: appPath('**/*.css'),
    html: [
      appPath('**/*.html'),
      path.join(root, 'index.html')
    ],
    dist: path.join(__dirname, 'dist/')
  };

  gulp.task('serve', function(){
    serve.init({
      port: process.env.PORT || 3001,
      open: false,
      files: [].concat(
        [paths.js],
        [paths.css],
        paths.html
      ),
      server: {
        baseDir: root,
        // serve our jspm dependencies with the client folder
        routes: {
          '/jspm.config.js': './jspm.config.js',
          '/jspm_packages': './jspm_packages'
        }
      }
    });
  });

  gulp.task('build', function() {
    var dist = path.join(paths.dist + 'githop.js');
    return jspm.bundleSFX(appPath('githop.module'), dist, {})
      .then(function() {
        return gulp.src(dist)
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(rename('app.min.js'))
        .pipe(gulp.dest(paths.dist));
      })
      .then(function() {
        return gulp.src('client/index.html')
          .pipe(htmlReplace({
            'js': 'app.min.js'
          }))
          .pipe(gulp.dest(paths.dist));
      });
  });

  gulp.task('clean', function (done) {
    del(paths.dist, done);
  });

  gulp.task('manifest', function() {
    return gulp.src(paths.dist + '**')
      .pipe(manifest({
        hash: true,
        preferOnline: true,
        network: ['*', 'http://*'],
        filename: 'githop.manifest',
        exclude: 'githop.manifest'
      }))
      .pipe(gulp.dest(paths.dist));
  });

})();
