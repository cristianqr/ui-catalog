
// in extenals mode, polyfills are directly loaded into index.html
// to make sure everything is loaded in the right order
// the original contents of this file has been moved to polyfills.ts.bak
  


import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js';

if (!window['customElements']) {
  const script = document.createElement('script');
  script.src = './assets/webcomponentsjs/bundles/webcomponents-sd-ce.js';
  document.writeln(script.outerHTML);
}
