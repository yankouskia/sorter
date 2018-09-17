class Sorter {
  constructor() {
    // your implementation
    this.curArray = [];
    this.comporator = function(left, right){return left - right};
  }

  add(element) {
    // your implementation
    this.curArray.push(element);
  }

  at(index) {
    // your implementation
    return (this.curArray[index]);
  }

  get length() {
    // your implementation
    return this.curArray.length;
  }

  toArray() {
    // your implementation
    return this.curArray;
  }

  sort(indices) {
    // your implementationim
    if(indices.length > 1){
      let sortArray = [];
      for (let i = 0; i < indices.length; i++){
        sortArray[i]= this.curArray[indices[i]];
      }    
      
      sortArray.sort(this.comporator);
      //sortArray.sort(function(left, right){return left - right});
      indices.sort(function(left, right){return left - right});
      for (let i = 0; i < indices.length; i++){
        this.curArray[indices[i]] = sortArray[i];
      } 
    }
  }

  setComparator(compareFunction) {
    // your implementation
    //this.curArray.sort(compareFunction);
    this.comporator = compareFunction;
  }
}

module.exports = Sorter;