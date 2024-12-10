import filter from '../src/filter.js';
import *  as chai from 'chai';

const expect = chai.expect;

describe('Filter Function', () => {
  it('should return a new array', () => {
    expect(filter([1, 2, 3, 4, 5], () => true)).to.not.equal([1, 2, 3, 4, 5]);
  });
  it('should return [ [] ] for null', () => {
    expect(filter(null)).to.deep.equal([[]]);
  })

  describe('with always true predicate', () => {
    it('and empty array should return empty array of arrays', () => {
      expect(filter([], () => true)).to.deep.equal([[]]);
    });

    it('and non-empty array should return unchanged array', () => {
      expect(filter([1, 2, 3, 4, 5], () => true)).to.deep.equal([1, 2, 3, 4, 5]);
    });
  });

  describe('with always false predicate', () => {
    it('and empty array should return empty array of arrays', () => {
      expect(filter([], () => false)).to.deep.equal([[]]);
    });

    it('and non-empty array should return empty array of arrays', () => {
      expect(filter([1, 2, 3, 4, 5], () => false)).to.deep.equal([[]]);
    });
  });

  describe('with simple equality predicate', () => {
    it('that is true for one element should return array with that element', () => {
      expect(filter([1, 2, 3, 4, 5], element => element == 3)).to.deep.equal([3]);
    });

    it('that is true for no elements should return empty array of arrays', () => {
      expect(filter([1, 2, 3, 4, 5], element => element == 6)).to.deep.equal([[]]);
    });

    it('that is true for all elements should return unchanged array', () => {
      expect(filter([3, 3, 3, 3, 3], element => element == 3)).to.deep.equal([3, 3, 3, 3, 3]);
    });
  });

  describe('with mathematical predicate', () => {
    it('that is true for one element should return array with that element', () => {
      expect(filter([1, 2, 3, 4, 5], element => element * 3 == 9)).to.deep.equal([3]);
    });

    it('that is true for no elements should return empty array of arrays', () => {
      expect(filter([1, 2, 3, 4, 5], element => element * 3 == 7)).to.deep.equal([[]]);
    });

    it('that is true for all elements should return unchanged array', () => {
      expect(filter([3, 3, 3, 3, 3], element => element * 3 == 9)).to.deep.equal([3, 3, 3, 3, 3]);
    });
  });

});