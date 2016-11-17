/**
 * Load the requisit scripts for this application
 * Usage:
 *     Put the script links for url or path in an array for scripts.
 * 
 *     ['//my/path/to/lib1.js',
 *      '//another/url/to/lib2.js'
 *     ]
 * 
 * Reference:
 *     https://www.html5rocks.com/en/tutorials/speed/script-loading/
 * 
 */
 
 
 /** Scripts */
 [
  '../js/tempAPIkey.js',
  '../js/app.js',
  '../js/ux.js'
].forEach(function(src) {
  var script = document.createElement('script');
  script.src = src;
  script.async = false;
  document.head.appendChild(script);
});