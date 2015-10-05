/**
 * Created by three on 15/9/16.
 */

describe('components：page test', function() {
    var __page;
    // Load the myApp module, which contains the directive
    beforeEach(angular.mock.module('ng.poler'));
    // Store references to $rootScope and $compile
    // so they are available to all tests in this describe block
    beforeEach(inject(function($httpBackend, Page){
        __page = Page;
    }));

    it('xxxx', function () {
        __page.goTop();
    })
});