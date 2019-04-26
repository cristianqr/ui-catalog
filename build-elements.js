const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
    const files = [
        './dist/ui-catalog/runtime.js',
        './dist/ui-catalog/polyfills.js',
        './dist/ui-catalog/scripts.js',
        './dist/ui-catalog/main.js',
    ];
    await fs.ensureDir('elements');
    await concat(files, 'elements/elements.js');
    await fs.copyFile('./dist/ui-catalog/styles.css', 'elements/styles.css');
    await fs.copy('./dist/ui-catalog/assets/', 'elements/assets/');
})();
