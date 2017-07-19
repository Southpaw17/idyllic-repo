var describe = require('mocha').describe,
    it = require('mocha').it,
    expect = require('chai').expect;

describe('Simple Test', function () {
    it('should pass', function () {
        var str = require('./index.js');

        expect(str).to.equal('Hello World');
    });
});