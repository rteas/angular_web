'use strict';

// Test outline
describe('myApp.info module', function() {

  beforeEach(module('myApp.info'));

  describe('github controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var githubCtrl = $controller('githubCtrl');
      expect(githubCtrl).toBeDefined();
    }));

  });
});