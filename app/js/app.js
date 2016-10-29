/*global jQuery tak getApiKey*/

/** file: app.js

    Show off some different examples of accessing the google maps API.
    
*/

var egm = {};//example google maps

egm = (function funcEGM ($){
    "use strict";
    var version = function funcVersion() {
                     return "0.0.1-alpha.1";//http://semver.org/
        },
        
        init1 = function funcINIT1() {
            var uri = "https://maps.googleapis.com/maps/api/js?key=" + tak.getApiKey();
            console.log("in function init1 uri: "+uri);
            var mapsAPIloader = $.getScript(uri)
             .done(function( script, textStatus ) {
                console.log( "In function init1, in function $.getScript: " + textStatus );
             })
             .fail(function( jqxhr, settings, exception ) {
                 console.log("Failed to load google maps API in funcINIT1.");
             });
        };

    return {
        version : version,
        init1 : init1
    };
}(jQuery));

//tak.getApiKey(); //was this here for a reason


document.addEventListener('DOMContentLoaded', function funcDOMContentLoaded() {
    "use strict";
    //tak.ResetApiKey();// debug only, to reset wrong key (accidentally) cached in page
    egm.init1(); //need this commented temporarily

    console.log("tak.version: " + tak.version() );//debug only
    console.log("egm.version: " + egm.version() );//debug only
}, false);

