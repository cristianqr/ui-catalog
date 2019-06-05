const fs = require('fs-extra');
const nodeMinify = require('node-minify');
const concat = require('concat');
(async function build() {
    const angularPackages = [
        './dist/ui-catalog/assets/rxjs/rxjs.umd.js',
        './dist/ui-catalog/assets/core/bundles/core.umd.js',
        './dist/ui-catalog/assets/common/bundles/common.umd.js',
        './dist/ui-catalog/assets/elements/bundles/elements.umd.js',
    ];
    concat(angularPackages, './dist/ui-catalog/angular.js');
    nodeMinify.minify({
        compressor: 'uglifyjs',
        input: './dist/ui-catalog/angular.js',
        output: './dist/ui-catalog/angular.min.js',
    });
    //await fs.copyFile('./dist/ui-catalog/styles.css', 'dist/styles.css');
    //await fs.copy('./dist/ui-catalog/assets/', 'dist/assets/');
    // await fs.remove('dist/ui-catalog');
})();
