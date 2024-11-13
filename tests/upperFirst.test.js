import upperFirst from '../src/upperFirst.js';
import *  as chai from 'chai';

const expect = chai.expect;

describe('UpperFirst Function', () => {
    it('should return "Hello world" for "hello world"', () => {
        expect(upperFirst('hello world')).to.equal('Hello world');
    });

    it('should return "HELLO" for "HELLO"', () => {
        expect(upperFirst('HELLO')).to.equal('HELLO');
    });

    it('should return "123" for "123"', () => {
        expect(upperFirst('123')).to.equal('123');
    });

    it('should return "" for ""', () => {
        expect(upperFirst('')).to.equal('');
    });

    it('should return "HeLLo" for "heLLo"', () => {
        expect(upperFirst('heLLo')).to.equal('HeLLo');
    });

    it('should return "" for null', () => {
        expect(upperFirst(null)).to.equal('');
    });


});