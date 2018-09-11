
class Sorter {

  
  constructor() {
      this.array = [];
      this.DefaultComparator = (a, b) => a - b;
      this.compareFunction = this.DefaultComparator
  }

  add(element) {
      this.array.push(element); 
  }

  at(index) {
      return this.array[ index ];
  }

  get length() {
      return this.array.length;
  }

  toArray() {
      return this.array.slice();
  }

  sort(indices) {  
    
    var temp =[];
    indices.sort(this.defaultCompareFunction);

    for (var i = 0; i < indices.length; i++) {
        if (indices[i] >= 0 && indices[i] < this.array.length){
            temp.push(this.array[ indices[i] ]);
        }
        else{
            console.log("Index: " + indices[i] + " outs of range!");
        }
    }
    
    var tempSize = temp.length;
    temp.sort(this.compareFunction);
    
    for (var i = 0; i < tempSize; i++) {
        this.array[ indices[i] ] = temp.shift();
    };
  };

  setComparator(compareFunction) {
      if (compareFunction != null){
          this.compareFunction = compareFunction;
      } else {
          this.compareFunction = this.DefaultComparator
      }
  };

};

module.exports = Sorter;