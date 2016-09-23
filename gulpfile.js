(function() {
  'use strict';

  var gulp = require('gulp');
  var path = require('path');
  var sass = require('gulp-sass');
  var sourcemaps = require('gulp-sourcemaps');
  var merge = require('merge-stream');
  // var htmlReplace = require('gulp-html-replace');
  // var ngAnnotate = require('gulp-ng-annotate');
  // var serve = require('browser-sync');
  // var manifest = require('gulp-manifest');
  var rollup = require('rollup').rollup;
  const nodeResolve = require('rollup-plugin-node-resolve');
  const typescript = require('rollup-plugin-typescript');
  // const compile = require('google-closure-compiler-js').compile;
  const commonjs = require('rollup-plugin-commonjs');
  const {resolve} = require('path');
  const string = require('rollup-plugin-string');
  const concat = require('gulp-concat');
  var root = 'client';

  var pathHelper = function(clipath) {
    return function(glob) {
      glob = glob || '';
      return path.join(root, clipath, glob);
    };
  };

  function closureCompilerPlugin() {
    return {
      transformBundle(bundle) {
        var transformed = compile({jsCode: [{src: bundle}]});

        return transformed.compiledCode;
      }
    };
  }

  var appPath = pathHelper('githop'); //client/githop/{blob}
  var components = pathHelper('githop/components'); //githop/components/{blob}

  var paths = {
    ts: appPath('**/*.js'),
    css: appPath('**/*.css'),
    html: [
      appPath('**/*.html'),
      path.join(root, 'index.html')
    ],
    dist: path.join(__dirname, 'dist/')
  };

  gulp.task('serve', function() {
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

  gulp.task('rollup-gcc', function() {
    rollup({
      entry: appPath('githop.module.ts'),
      plugins: [
        string({include: '**/*.html', exclude: ['**/index.html']}),
        typescript({typescript: require('typescript')}),
        nodeResolve({jsnext: true, main: true}),
        commonjs({include: 'node_modules/**'}),
        closureCompilerPlugin()
      ]
    }).then(bundle => bundle.write({dest: 'dist/bundle.js', format: 'iife', moduleName: 'githopRollsup'})).catch(console.log);
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

  gulp.task('sass', function() {

    var css = gulp.src(appPath('**/*.css'))
        .pipe(concat(('css.css')));

    var scss = gulp.src(appPath('**/*.scss'))
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('sass.scss'));

    return merge(css, scss)
        .pipe(concat('styles.css'))
        .pipe(gulp.dest(root + '/assets/styles'));
  });



  gulp.task('sass:watch', function() {
    gulp.watch(appPath('**/*.scss'), ['sass']);
  });

})();
