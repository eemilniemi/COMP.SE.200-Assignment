import map from '../src/map.js';
import *  as chai from 'chai';

const expect = chai.expect;

describe('Map Function', () => {
  it('should return a new array', () => {
    expect(map([1, 2, 3, 4, 5], element => element)).to.not.equal([1, 2, 3, 4, 5]);
  });

  it('should return [] for null', () => {
    expect(map(null)).to.deep.equal([]);
  });

  it('with iteratee that returns the input should return unchanged array', () => {
    expect(map([1, 2, 3, 4, 5], element => element)).to.deep.equal([1, 2, 3, 4, 5]);
  });

  it('with iteratee that always returns the same value should return array of that value', () => {
    expect(map([1, 2, 3, 4, 5], () => 3)).to.deep.equal([3, 3, 3, 3, 3]);
  });

  it('with iteratee that performs addition should return correct array', () => {
    expect(map([1, 2, 3, 4, 5], element => element + 5)).to.deep.equal([6, 7, 8, 9, 10]);
  });

  it('with iteratee that performs squaring should return correct array', () => {
    expect(map([1, 2, 3, 4, 5], element => element * element)).to.deep.equal([1, 4, 9, 16, 25]);
  });

  it('with iteratee that performs string concatenation should return correct array', () => {
    expect(map([1, 2, 3, 4, 5], element => element + " test")).to.deep.equal(["1 test", "2 test", "3 test", "4 test", "5 test"]);
  });

  it('with iteratee that returns an array should return correct array of arrays', () => {
    expect(map([1, 2, 3, 4, 5], element => [element])).to.deep.equal([[1], [2], [3], [4], [5]]);
  });
});