/*global $ tak egm jasmine expect */

describe("Custom features of the app ", function() {

  describe("The web page ", function() {

    it("should have an api key assigned", function() {
      var key = tak.getApiKey();
      //not checking for exact version
      expect(typeof(key)).toBe('string');
    });

  });

});


