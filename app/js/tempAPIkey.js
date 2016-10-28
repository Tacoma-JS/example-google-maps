/*global localStorage */

/** file: tempAPIkey.js

    Let the user set an API key of their own, to be stored
    temporaryily in localStorage.

*/
var temporaryAPIkey;

var tak = temporaryAPIkey = (function funcTAK (){

        
        var _apiKey = null,

        setApiKey = function (apiKey) {
            _apiKey = apiKey;
            localStorage.setItem("apiKey", apiKey);
        },

        getApiKey = function () {

            if (_apiKey === null) {
                setApiKey(localStorage.getItem("apiKey"));
            }

            if (_apiKey === null) {
                setApiKey(prompt("Please enter in the Openweathermap.org API Key"));
            }
            return _apiKey;
        };

    return {
        setApiKey :setApiKey,
        getApiKey : getApiKey
    };

}());
