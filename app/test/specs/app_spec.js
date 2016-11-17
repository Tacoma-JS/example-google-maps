/*global $ egm expect */
describe("example-google-maps (egm) installed ", function() {
    
  it("version function returns a string", function() {
    var version = egm.version();
    //not checking for exact version
    expect(typeof(version)).toBe('string');
  });

});
