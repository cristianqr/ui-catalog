const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
    const files = [
        './dist/ui-catalog/runtime.js',
        './dist/ui-catalog/polyfills.js',
        './dist/ui-catalog/scripts.js',
        './dist/ui-catalog/main.js',
    ];
    await concat(files, 'dist/elements.js');
    await fs.copyFile('./dist/ui-catalog/styles.css', 'dist/styles.css');
    await fs.copy('./dist/ui-catalog/assets/', 'dist/assets/');
    await fs.remove('dist/ui-catalog');
})();
