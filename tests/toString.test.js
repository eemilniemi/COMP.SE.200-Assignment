import toString from '../src/toString.js';
import *  as chai from 'chai';

const expect = chai.expect;

describe('ToString Function', () => {
    it('should return "Hello world" for "Hello world"', () => {
        expect(toString("Hello world")).to.equal('Hello world');
    });

    it('should return "3" for 3', () => {
        expect(toString(3)).to.equal('3');
    });

    it('should return "3.5" for 3.5', () => {
        expect(toString(3.5)).to.equal('3.5');
    });

    it('should return "0" for 0', () => {
        expect(toString(0)).to.equal('0');
    });

    it('should return "-5" for -5', () => {
        expect(toString(-5)).to.equal('-5');
    });

    it('should return "null" for null', () => {
        expect(toString(null)).to.equal('null');
    });

    it('should return "undefined" for undefined', () => {
        expect(toString(undefined)).to.equal('undefined');
    });

    it('should return "true" for true', () => {
        expect(toString(true)).to.equal('true');
    });

    it('should return ["1", "2", "3"] for [1, 2, 3]', () => {
        expect(toString([1, 2, 3])).to.equal('1,2,3');
    });

});