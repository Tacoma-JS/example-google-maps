/*global jQuery tak*/

/** file: app.js

    Show off some different examples of accessing the google maps API.
    
*/

var egm = {};//example google maps

egm = (function funcEGM ($){
    "use strict";
    var version = function funcVersion() {
                     return "0.0.1-alpha.1";//http://semver.org/
        }

    return {
        version : version
    };
}(jQuery));

tak.getApiKey();
console.log("egm.version: " + egm.version() );


