class Sorter {
    constructor() {
        this.arr = [];
        this.compareFunction = (a, b) => a - b;
    }

    get length() {
        return this.arr.length;
    }

    add(element) {
        this.arr.push(element);
    }

    at(index) {
        return this.arr[index];
    }

    toArray() {
        return this.arr;
    }

    sort(indices) {
        let sortedPart = [];
        indices.sort((a, b) => a - b);

        for (let i in indices) {
            sortedPart.push(this.arr[indices[i]]);
        }

        sortedPart.sort(this.compareFunction);

        for (let i = 0; i < indices.length; i++) {
            this.arr[indices[i]] = sortedPart[i];
        }
        return this.arr;
    }

    setComparator(compareFunction) {
        compareFunction == undefined ? null : this.compareFunction = compareFunction;
    }
}


/*let sorter = new Sorter();
sorter.add(5);
sorter.add(4);
sorter.add(3);
console.log(sorter.toArray());
sorter.sort([0, 1, 2]);
console.log(sorter.toArray());
console.log(sorter.length);
console.log(typeof sorter);
sorter.add(1);
sorter.add(2);
sorter.add(3);
sorter.sort[0, 1, 2];
sorter.sort([0]);
console.log(sorter.toArray());
console.log(sorter.toArray() == [1])*/

module.exports = Sorter;