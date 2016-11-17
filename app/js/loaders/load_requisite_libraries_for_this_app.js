/**
 * Load the requisit scripts for this application
 * Usage:
 *     Put the script links for url or path in an array for scripts
 *     and for css files respectively.  There is a separate
 *     section for each.
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
  '//cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js',
  '//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js'
].forEach(function(src) {
  var script = document.createElement('script');
  script.src = src;
  script.async = false;
  document.head.appendChild(script);
});


/** Themes */
[
  '//cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.6/sandstone/bootstrap.min.css'
].forEach(function(src) {
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = src;
  document.head.appendChild(link);
});