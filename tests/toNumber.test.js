import toNumber from '../src/toNumber.js';
import *  as chai from 'chai';

const expect = chai.expect;

describe('ToNumber Function', () => {
    it('should return 3 for "3"', () => {
        expect(toNumber("3")).to.equal(3);
    });

    it('should return 0 for "0.00"', () => {
        expect(toNumber("0.00")).to.equal(0);
    });

    it('should return 3.01 for "3.01"', () => {
        expect(toNumber('3.01')).to.equal(3.01);
    });

    it('should return -5 for "-5"', () => {
        expect(toNumber('-5')).to.equal(-5);
    });

    it('should return 0 for null', () => {
        expect(toNumber(null)).to.equal(0);
    });

    it('should return 1 for true', () => {
        expect(toNumber(true)).to.equal(1);
    });

    it('should return NaN for undefined', () => {
        expect(toNumber(undefined)).to.be.NaN;
    });

    it('should return NaN for "abc"', () => {
        expect(toNumber("abc")).to.be.NaN;
    });

    it('should return 3 for "   3    "', () => {
        expect(toNumber("   3    ")).to.equal(3);
    });

    it('should return 5 for [5]', () => {
        expect(toNumber([5])).to.equal(5);
    });

    it('should return correct number with valueOf method', () => {
        const object = {
            valueOf() {
                return 5;
            }
        };
        expect(toNumber(object)).to.equal(5);
    });

    it('should return correct number for binary string', () => {
        expect(toNumber('0b101')).to.equal(5);
    });

    it('should return NaN for invalid binary string', () => {
        expect(toNumber('0b102')).to.be.NaN;
    });

    it('should return correct number for octal string', () => {
        expect(toNumber('0o5')).to.equal(5);
    });

    it('should return NaN for invalid octal string', () => {
        expect(toNumber('0o8')).to.be.NaN;
    });

    it('should return correct number for hex string', () => {
        expect(toNumber('0x5')).to.equal(5);
    });

    it('should return NaN for invalid hex string', () => {
        expect(toNumber('0xg')).to.be.NaN;
    });

    it('should return 0 for empty string', () => {
        expect(toNumber('')).to.equal(0);
    });

    it('should return 0 for empty array', () => {
        expect(toNumber([])).to.equal(0);
    });

});

