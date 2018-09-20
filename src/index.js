class Sorter {
    constructor() {
        this.arr = new Array();
    }

    get length() {
        return this.arr.length;
    }

    add(element) {
        this.arr.push(element);
    }

    at(index) {
        // your implementation
    }

    toArray() {
        
    }

    sort(indices) {
        // your implementation
    }

    setComparator(compareFunction) {
        // your implementation
    }
}


let sorter = new Sorter();
console.log(sorter.length);
sorter.add(5);
sorter.add(3);
console.log(sorter.length);
//module.exports = Sorter;