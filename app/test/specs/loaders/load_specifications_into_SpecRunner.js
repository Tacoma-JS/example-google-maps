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

/** User interface test modules with jQuery
  *   https://github.com/velesin/jasmine-jquery
  *   Tutorial
  *     http://www.htmlgoodies.com/beyond/javascript/js-ref/testing-dom-events-using-jquery-and-jasmine-2.0.html
*/
var jjq = ["https://rawgit.com/velesin/jasmine-jquery/master/lib/jasmine-jquery.js"];


/** Specifications */
var specs = [  './specs/integration_spec1.js',
               './specs/app_spec1.js'
            ];

var scriptList = jjq.concat(specs);

scriptList.forEach(function(src) {
  var script = document.createElement('script');
  script.src = src;
  script.async = false;
  document.head.appendChild(script);
});