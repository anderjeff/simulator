var assert = require('assert');
var Shaft = require('../js/shaft').Shaft;
var chai = require('chai');
var expect = chai.expect;

describe('Shaft torque measurement with stiffness = 2000 and angle = 5', () => {
    it('should return 10000', () => {
        let stiffness = 2000;
        var shaft = new Shaft(stiffness);
        let angle = 5;
        const result = shaft.calculateShaftTorque(angle);
        expect(result).to.equal(stiffness * angle);
    });
});