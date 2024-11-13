import add from '../src/add.js';
import *  as chai from 'chai';

const expect = chai.expect;
const should = chai.should();

describe('Add Function', () => {
    it('should add 1 + 2 to equal 3', () => {
    expect(add(1, 2)).to.equal(3);
    });

    it('should add 0 + 0 to equal 0', () => {
    expect(add(0, 0)).to.equal(0);
    });

    it('should add -1 + 1 to equal 0', () => {
    expect(add(-1, 1)).to.equal(0);
    });

    it('should add -1 + -1 to equal -2', () => {
    expect(add(-1, -1)).to.equal(-2);
    });

    it('should add 0.1 + 0.2 to equal 0.3', () => {
        add(0.1, 0.2).should.be.closeTo(0.3, 0.0001);
    });

    it('should add 1.43 + 2.56 to equal 3.99', () => {
        add(1.43, 2.56).should.be.closeTo(3.99, 0.0001);
    });
});