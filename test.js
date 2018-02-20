const assert = require('assert');
Object.freeze(assert);
const Sorter = require('./src/index.js');

describe('Sorter', () => {
  let sorter;

  beforeEach(() => {
    sorter = new Sorter();
  });

  it('adds element', () => {
    sorter.add(5);

    assert.deepEqual(sorter.toArray(), [5]);
    assert.deepEqual(sorter.length, 1);
  });

  it('adds different types', () => {
    sorter.add('123');
    sorter.add(123);
    sorter.add(new Number(123));
    sorter.add(Symbol(123));

    assert.deepEqual(sorter.length, 4);
  });

  describe('sorts numbers by default', () => {
    it('1', () => {
      sorter.add(5);
      sorter.sort([0]);
  
      assert.deepEqual(sorter.toArray(), [5]);
      assert.deepEqual(sorter.length, 1);
    });

    it('2', () => {
      sorter.add(5);
      sorter.add(6);
      sorter.sort([0]);
  
      assert.deepEqual(sorter.toArray(), [5, 6]);
      assert.deepEqual(sorter.length, 2);
    });

    it('3', () => {
      sorter.add(7);
      sorter.add(6);
      sorter.add(5);
      sorter.sort([0, 1, 2]);
  
      assert.deepEqual(sorter.toArray(), [5, 6, 7]);
      assert.deepEqual(sorter.length, 3);
      assert.deepEqual(sorter.at(0), 5);
      assert.deepEqual(sorter.at(1), 6);
      assert.deepEqual(sorter.at(2), 7);
    });

    it('3', () => {
      sorter.add(7);
      sorter.add(6);
      sorter.add(5);
      sorter.sort([0, 1]);
  
      assert.deepEqual(sorter.toArray(), [6, 7, 5]);
      assert.deepEqual(sorter.length, 3);
      assert.deepEqual(sorter.at(0), 6);
      assert.deepEqual(sorter.at(1), 7);
      assert.deepEqual(sorter.at(2), 5);
    });

    it('4', () => {
      sorter.add(7);
      sorter.add(6);
      sorter.add(5);
      sorter.sort([1, 2]);
  
      assert.deepEqual(sorter.toArray(), [7, 5, 6]);
      assert.deepEqual(sorter.length, 3);
      assert.deepEqual(sorter.at(0), 7);
      assert.deepEqual(sorter.at(1), 5);
      assert.deepEqual(sorter.at(2), 6);
    });

    it('5', () => {
      sorter.add(7);
      sorter.add(6);
      sorter.add(5);
      sorter.sort([0, 1, 2]);

      sorter.add(3);
  
      assert.deepEqual(sorter.toArray(), [5, 6, 7, 3]);
      assert.deepEqual(sorter.length, 4);
      assert.deepEqual(sorter.at(0), 5);
      assert.deepEqual(sorter.at(1), 6);
      assert.deepEqual(sorter.at(2), 7);
      assert.deepEqual(sorter.at(3), 3);
    });

    it('6', () => {
      sorter.add(7);
      sorter.add(6);
      sorter.add(5);
      sorter.sort([0, 1, 2]);

      sorter.add(3);
      sorter.add(2);
      sorter.add(1);
      sorter.sort([0, 1, 2]);
  
      assert.deepEqual(sorter.toArray(), [5, 6, 7, 3, 2, 1]);
      assert.deepEqual(sorter.length, 6);
      assert.deepEqual(sorter.at(0), 5);
      assert.deepEqual(sorter.at(1), 6);
      assert.deepEqual(sorter.at(2), 7);
      assert.deepEqual(sorter.at(3), 3);
    });

    it('7', () => {
      sorter.add(6);
      sorter.add(5);
      sorter.sort([0, 1]);

      sorter.add(2);
      sorter.add(1);
      sorter.sort([0, 1]);
  
      assert.deepEqual(sorter.toArray(), [5, 6, 2, 1]);
      assert.deepEqual(sorter.length, 4);
      assert.deepEqual(sorter.at(0), 5);
      assert.deepEqual(sorter.at(1), 6);
      assert.deepEqual(sorter.at(2), 2);
      assert.deepEqual(sorter.at(3), 1);
    });

    it('8', () => {
      sorter.add(6);
      sorter.add(5);
      sorter.sort([0, 1]);

      sorter.add(2);
      sorter.add(1);
      sorter.sort([1, 0]);
  
      assert.deepEqual(sorter.toArray(), [5, 6, 2, 1]);
      assert.deepEqual(sorter.length, 4);
      assert.deepEqual(sorter.at(0), 5);
      assert.deepEqual(sorter.at(1), 6);
      assert.deepEqual(sorter.at(2), 2);
      assert.deepEqual(sorter.at(3), 1);
    });

    it('9', () => {
      sorter.add(6);
      sorter.add(5);
      sorter.add(2);
      sorter.add(1);

      sorter.sort([1, 2]);
      sorter.sort([2, 3]);
  
      assert.deepEqual(sorter.toArray(), [6, 2, 1, 5]);
      assert.deepEqual(sorter.length, 4);
      assert.deepEqual(sorter.at(0), 6);
      assert.deepEqual(sorter.at(1), 2);
      assert.deepEqual(sorter.at(2), 1);
      assert.deepEqual(sorter.at(3), 5);
    });

    it('10', () => {
      sorter.add(6);
      sorter.add(5);
      sorter.add(2);
      sorter.add(1);

      sorter.sort([2, 1]);
      sorter.sort([2, 3]);
  
      assert.deepEqual(sorter.toArray(), [6, 2, 1, 5]);
      assert.deepEqual(sorter.length, 4);
      assert.deepEqual(sorter.at(0), 6);
      assert.deepEqual(sorter.at(1), 2);
      assert.deepEqual(sorter.at(2), 1);
      assert.deepEqual(sorter.at(3), 5);
    });

    it('11', () => {
      sorter.add(6);
      sorter.add(5);
      sorter.add(2);
      sorter.add(1);

      sorter.sort([2, 1]);
      sorter.sort([3, 2]);
  
      assert.deepEqual(sorter.toArray(), [6, 2, 1, 5]);
      assert.deepEqual(sorter.length, 4);
      assert.deepEqual(sorter.at(0), 6);
      assert.deepEqual(sorter.at(1), 2);
      assert.deepEqual(sorter.at(2), 1);
      assert.deepEqual(sorter.at(3), 5);
    });

    it('12', () => {
      sorter.add(6);
      sorter.add(5);
      sorter.add(20);
      sorter.add(10);

      sorter.sort([2, 1]);
      sorter.sort([3, 2]);
  
      assert.deepEqual(sorter.toArray(), [6, 5, 10, 20]);
      assert.deepEqual(sorter.length, 4);
      assert.deepEqual(sorter.at(0), 6);
      assert.deepEqual(sorter.at(1), 5);
      assert.deepEqual(sorter.at(2), 10);
      assert.deepEqual(sorter.at(3), 20);
    });

    it('13', () => {
      sorter.add(6);
      sorter.add(5);
      sorter.add(20);
      sorter.add(10);
      sorter.add(100);

      sorter.sort([2, 1]);
      sorter.sort([3, 2]);
      sorter.sort([4, 3]);
  
      assert.deepEqual(sorter.toArray(), [6, 5, 10, 20, 100]);
      assert.deepEqual(sorter.length, 5);
      assert.deepEqual(sorter.at(0), 6);
      assert.deepEqual(sorter.at(1), 5);
      assert.deepEqual(sorter.at(2), 10);
      assert.deepEqual(sorter.at(3), 20);
      assert.deepEqual(sorter.at(4), 100);
    });

    it('14', () => {
      sorter.add(6);
      sorter.add(5);
      sorter.add(20);
      sorter.add(10);
      sorter.add(100);

      sorter.sort([2, 1]);
      sorter.sort([3, 2]);
      sorter.sort([4, 3]);

      sorter.add(1000);
  
      assert.deepEqual(sorter.toArray(), [6, 5, 10, 20, 100, 1000]);
      assert.deepEqual(sorter.length, 6);
      assert.deepEqual(sorter.at(0), 6);
      assert.deepEqual(sorter.at(1), 5);
      assert.deepEqual(sorter.at(2), 10);
      assert.deepEqual(sorter.at(3), 20);
      assert.deepEqual(sorter.at(4), 100);
      assert.deepEqual(sorter.at(5), 1000);
    });
  });

  describe('sorts with custom comparator', () => {
    const AGE_COMPARATOR = (left, right) => left.age - right.age;
    const REVERSE_COMPARATOR = (left, right) => right - left;
    const STRINGIFY_COMPARATOR = (left, right) => JSON.stringify(left, null, 2).length - JSON.stringify(right, null, 2).length;

    describe('age comparator', () => {
      it('1', () => {
        sorter.add({ age: 20 });
        sorter.add({ age: 18 });
        sorter.add({ age: 16 });
  
        sorter.setComparator(AGE_COMPARATOR);
        sorter.sort([0, 1]);
  
        assert.deepEqual(sorter.at(0).age, 18);
        assert.deepEqual(sorter.at(1).age, 20);
        assert.deepEqual(sorter.at(2).age, 16);
      });

      it('2', () => {
        sorter.add({ age: 20 });
        sorter.add({ age: 18 });
        sorter.add({ age: 16 });
  
        sorter.setComparator(AGE_COMPARATOR);
        sorter.sort([0, 1]);

        sorter.add({ age: 14 });
        sorter.sort([3, 2]);
  
        assert.deepEqual(sorter.at(0).age, 18);
        assert.deepEqual(sorter.at(1).age, 20);
        assert.deepEqual(sorter.at(2).age, 14);
        assert.deepEqual(sorter.at(3).age, 16);
      });
    });

    describe('reverse comparator', () => {
      it('1', () => {
        sorter.add(6);
        sorter.add(5);
        sorter.add(20);
        sorter.add(10);
        sorter.add(100);

        sorter.setComparator(REVERSE_COMPARATOR);
        sorter.sort([1, 0]);
    
        assert.deepEqual(sorter.toArray(), [6, 5, 20, 10, 100]);
        assert.deepEqual(sorter.length, 5);
        assert.deepEqual(sorter.at(0), 6);
        assert.deepEqual(sorter.at(1), 5);
        assert.deepEqual(sorter.at(2), 20);
        assert.deepEqual(sorter.at(3), 10);
        assert.deepEqual(sorter.at(4), 100);
      });

      it('2', () => {
        sorter.add(6);
        sorter.add(5);
  
        sorter.setComparator(REVERSE_COMPARATOR);
        sorter.sort([1, 0]);
  
        sorter.add(20);
        sorter.add(10);
        sorter.add(100);
        sorter.sort([3, 4]);
    
        assert.deepEqual(sorter.toArray(), [6, 5, 20, 100, 10]);
        assert.deepEqual(sorter.length, 5);
        assert.deepEqual(sorter.at(0), 6);
        assert.deepEqual(sorter.at(1), 5);
        assert.deepEqual(sorter.at(2), 20);
        assert.deepEqual(sorter.at(3), 100);
        assert.deepEqual(sorter.at(4), 10);
      });
    });

    describe('stringify comparator', () => {
      it('1', () => {
        sorter.add({ age: 20, name: 'Alex' });
        sorter.add({ age: 18, smth: 'Anything' });
        sorter.add({ age: 5, course: 'Rolling Scopes' });
  
        sorter.setComparator(STRINGIFY_COMPARATOR);
        sorter.sort([0, 1]);
  
        assert.deepEqual(sorter.at(0).age, 20);
        assert.deepEqual(sorter.at(1).age, 18);
        assert.deepEqual(sorter.at(2).age, 5);
      });

      it('2', () => {
        sorter.add({ age: 20, name: 'Alex' });
        sorter.sort([0]);
        sorter.sort([0]);

        sorter.add({ age: 5, course: 'Rolling Scopes' });
        sorter.add({ age: 18, smth: 'Anything' });
  
        sorter.setComparator(STRINGIFY_COMPARATOR);
        sorter.sort([2, 1]);
  
        assert.deepEqual(sorter.at(0).age, 20);
        assert.deepEqual(sorter.at(1).age, 18);
        assert.deepEqual(sorter.at(2).age, 5);
      });

      it('3', () => {
        sorter.add({ age: 20, name: 'Alex' });
        sorter.sort([0]);
        sorter.sort([0]);

        sorter.add({ age: 5, course: 'Rolling Scopes' });
        sorter.add({ age: 18, smth: 'Anything' });
        sorter.add({ age: 7, smth: 'Some' });
  
        sorter.setComparator(STRINGIFY_COMPARATOR);
        sorter.sort([2, 1]);
        sorter.sort([3, 1]);
  
        assert.deepEqual(sorter.at(0).age, 20);
        assert.deepEqual(sorter.at(1).age, 7);
        assert.deepEqual(sorter.at(2).age, 5);
        assert.deepEqual(sorter.at(3).age, 18);
      });
    });

    describe('mixed comparator', () => {
      it('hard', () => {
        sorter.add({ age: 30, name: 'Dzmitry' });
        sorter.add({ age: 40, name: 'Alex' });

        sorter.setComparator(AGE_COMPARATOR);
        sorter.sort([1, 0]);

        sorter.add(2);
        sorter.add(10);

        sorter.setComparator(REVERSE_COMPARATOR);
        sorter.sort([2, 3]);

        sorter.setComparator(STRINGIFY_COMPARATOR)
        sorter.add('hello');
        sorter.add('hello world');

        sorter.sort([0, 2]);
        sorter.sort([1, 3]);
        sorter.sort([5, 2]);

        assert.deepEqual(sorter.at(0), 10);
        assert.deepEqual(sorter.at(1), 2);
        assert.deepEqual(sorter.at(2), 'hello world');
        assert.deepEqual(sorter.at(3), { age: 40, name: 'Alex' });
        assert.deepEqual(sorter.at(4), 'hello');
        assert.deepEqual(sorter.at(5), { age: 30, name: 'Dzmitry' });
      });
    });
  });
});
