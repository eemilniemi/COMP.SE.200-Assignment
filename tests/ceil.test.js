import ceil from '../src/ceil.js';
import *  as chai from 'chai';

const expect = chai.expect;
const should = chai.should();

describe('Ceil Function', () => {
    it('should ceil 6.00003 to equal 7', () => {
        expect(ceil(6.00003)).to.equal(7);
    });

    it('should ceil -6.00003 to equal -6', () => {
        expect(ceil(-6.00003)).to.equal(-6);
    });

    it('should ceil 0.00000000001 to equal 1', () => {
        expect(ceil(0.00000000001)).to.equal(1);
    });

    it('should ceil -1 to equal -1', () => {
        expect(ceil(-1)).to.equal(-1);
    });

    it('should ceil 0.00 to equal 0', () => {
        expect(ceil(0.00)).to.equal(0);
    });

    it('should ceil -0.00 to equal 0', () => {
        expect(ceil(-0.00)).to.equal(0);
    });
    
});