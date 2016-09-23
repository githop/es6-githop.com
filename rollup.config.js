/**
 * Created by githop on 9/12/16.
 */

const rollup = require('rollup').rollup;
const nodeResolve = require('rollup-plugin-node-resolve');
const typescript = require('rollup-plugin-typescript');
const commonjs = require('rollup-plugin-commonjs');
const compile = require('google-closure-compiler-js').compile;
const string = require('rollup-plugin-string');
const {resolve} = require('path');

function closureCompilerPlugin() {
  return {
    transformBundle(bundle) {
      var transformed = compile({
        jsCode: [{src: bundle}]
      });

      return transformed.compiledCode;
    }
  };
}

rollup({
  entry: 'client/githop/githop.module.ts',
  // external: [
  //   resolve('angular'),
  //   resolve('angular-animate'),
  //   resolve('angular-material'),
  //   resolve('angular-sanitize'),
  //   resolve('angular-ui-router')
  // ],
  // paths: {
  //   angular: resolve('angular'),
  //   'angular-animate': resolve('angular-animate'),
  //   'angular-material': resolve('angular-material'),
  //   'angular-sanitize':resolve('angular-sanitize'),
  //   'angular-ui-router': resolve('angular-ui-router')
  // },
  plugins: [
    typescript({typescript: require('typescript')}),
    nodeResolve({jsnext: true, main: true, browser: true}),
    commonjs({include: 'node_modules/**'}),
    string({include: '**/*.html', exclude: ['**/index.html']})
    // closureCompilerPlugin()
  ]
}).then(bundle => bundle.write({dest: 'dist/bundle.js', format: 'iife', moduleName: 'githop'})).catch(console.log);