/*global localStorage */

/** file: tempAPIkey.js

    Let the user set an API key of their own, to be stored
    temporarily in localStorage.

*/
var temporaryAPIkey;

var tak = temporaryAPIkey = (function funcTAK (){

        var _apiKey = null,
        
        version = function funcVersion() {
            return "0.0.1-alpha.1";//http://semver.org/
        },

        setApiKey = function (apiKey) {
            _apiKey = apiKey;
            localStorage.setItem("apiKey", apiKey);
        },

        getApiKey = function () {

            if (_apiKey === null) {
                setApiKey(localStorage.getItem("apiKey"));
            }

            if (_apiKey === null) {
                setApiKey(prompt("Please enter your temporary API Key"));
            }
            return _apiKey;
        };

    return {
        setApiKey : setApiKey,
        getApiKey : getApiKey,
        version : version
    };

}());
