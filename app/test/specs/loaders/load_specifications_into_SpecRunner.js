/**
 * Load the requisit scripts for this application
 * Usage:
 *     Put the script links for url or path in an array for scripts.
 * 
 *     ['./specs/app_spec1.js',
 *      './specs/app_spec2.js'
 *     ]
 *     
 *     Remember this path is relative to the SpecRunner.html directory (not the html directory)
 * 
 * Reference:
 *     https://www.html5rocks.com/en/tutorials/speed/script-loading/
 * 
 */
 
 
 /** Scripts */
 [  './specs/app_spec.js'
].forEach(function(src) {
  var script = document.createElement('script');
  script.src = src;
  script.async = false;
  document.head.appendChild(script);
});