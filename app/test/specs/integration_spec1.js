/*global $ tak egm jasmine expect */

describe("Integration specs: Libraries and app specific modules ", function() {

describe("jQuery ($) installed ", function() {

  it("version function returns a string", function() {
    var version = $.fn.jquery;
    //not checking for exact version
    expect(typeof(version)).toBe('string');
  });

});

describe("Bootstrap plug-in Modal is installed, ", function() {

  it("version function returns a string", function() {
    var version = $.fn.modal.Constructor.VERSION;
    //not checking for exact version
    expect(typeof(version)).toBe('string');
  });

});

describe("Bootstrap plug-in Alert is installed, ", function() {

  it("version function returns a string", function() {
    var version = $.fn.alert.Constructor.VERSION;
    //not checking for exact version
    expect(typeof(version)).toBe('string');
  });

});

describe("jasmine installed ", function() {

  it("version function returns a string", function() {
    var version = getJasmineRequireObj().version();
    //not checking for exact version
    expect(typeof(version)).toBe('string');
  });

});

describe("jasmine-jquery installed ", function() {

  it("set a sandbox fixture", function() {
    setFixtures(sandbox({class: 'my-sandbox-class'}));
    $('#sandbox').removeClass("my-sandbox-class");
    expect($('#sandbox')).not.toHaveClass('my-sandbox-class');
  });

});


describe("temporary api key getter (tak) installed ", function() {

  it("version function returns a string", function() {
    var version = tak.version();
    //not checking for exact version
    expect(typeof(version)).toBe('string');
  });

});


describe("example-google-maps (egm) installed ", function() {

  it("version function returns a string", function() {
    var version = egm.version();
    //not checking for exact version
    expect(typeof(version)).toBe('string');
  });

});


});//end describe "libraries and app specific modules"


