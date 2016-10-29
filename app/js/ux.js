/*global tak $ */
/**
   Scripts for the user interface
   
*/

//console.log("ux.js script is loaded")  ;
$(function(){
    
   $( "#resetTheApiKey" ).click(function(event) {
      // event.preventDefault();// To prevent following the link (optional)
      console.log("In file ux.js in function resetTheApiKey on click")
      tak.ResetApiKey();
   });
  
});
 