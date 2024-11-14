import reduce from '../src/reduce.js';
import *  as chai from 'chai';

const expect = chai.expect;

describe('Reduce Function', () => {
  it('with an empty array should return undefined', () => {
    expect(reduce([], (sum, n) => sum + n)).to.equal(undefined);
  });

  it('with an empty object should return undefined', () => {
    expect(reduce({}, (sum, n) => sum + n)).to.equal(undefined);
  });

  describe('with array', () => {
    it('should perform sum correctly', () => {
      expect(reduce([1, 2, 3, 4, 5], (sum, n) => sum + n, 0)).to.equal(15);
    });

    it('should perform concatenation correctly', () => {
      expect(reduce(['Testing', 'is', 'fun!'], (sum, n) => sum + ' ' + n)).to.equal('Testing is fun!');
    });
  });

  describe('with object', () => {
    it('should perform counting correctly', () => {
      expect(reduce({'bear': 'mammal', 'eagle': 'bird', 'fox': 'mammal'}, (count, value) => 
        {if (value === 'mammal') {
          count++;
        }
        return count;
      }, 0))
      .to.equal(2);
    });

    it('should perform sum correctly', () => {
      expect(reduce({'cheese': 5, 'bread': 2, 'milk': 1}, (sum, value) => sum + value, 0)).to.equal(8);
    });

    it('should perform flipping keys and values correctly', () => {
      expect(reduce({'bear': 'mammal', 'eagle': 'bird', 'fox': 'mammal'}, (result, value, key) => {
        (result[value] || (result[value] = [])).push(key);
        return result;
      }, {}))
      .to.deep.equal({'mammal': ['bear', 'fox'], 'bird': ['eagle']});
    });
  });
});