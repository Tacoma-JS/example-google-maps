/*global $ egm expect */

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

describe("Bootstrap plug-in Transition is installed, ", function() {
    
  it("version function returns a string", function() {
    var version = $.fn.transition.Constructor.VERSION;
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

