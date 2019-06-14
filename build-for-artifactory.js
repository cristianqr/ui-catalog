const fs = require('fs-extra');
const nodeMinify = require('node-minify');
const concat = require('concat');
(async function build() {
    const polyfillsPackages = ['./dist/ui-catalog/scripts.js'];
    const angularPackages = [
        './dist/ui-catalog/assets/rxjs/rxjs.umd.js',
        './dist/ui-catalog/assets/core/bundles/core.umd.js',
        './dist/ui-catalog/assets/common/bundles/common.umd.js',
        './dist/ui-catalog/assets/elements/bundles/elements.umd.js',
        './dist/ui-catalog/assets/platform-browser/bundles/platform-browser.umd.js',
    ];
    await concat(polyfillsPackages, './dist/polyfills.js');
    await concat(angularPackages, './dist/angular.js');
    await nodeMinify.minify({
        compressor: 'uglifyjs',
        input: './dist/angular.js',
        output: './dist/angular.min.js',
    });
    await fs.copyFile('./dist/ui-catalog/main-es5.js', './dist/custom-element-es5.js');
    await fs.copyFile('./dist/ui-catalog/main-es2015.js', './dist/custom-element-es2015.js');
    //await fs.copy('./dist/ui-catalog/assets/', 'dist/assets/');
    // await fs.remove('dist/ui-catalog');
})();
