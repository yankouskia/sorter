class Sorter {
  constructor() {
    this.storedArray=[];
    this.sortFunction=(left, right)=>{
      return left-right;
     };
  }

  add(element) {
   this.storedArray.push(element);
  }

  at(index) {
    return this.storedArray[index];
  }

  get length() {
    return this.storedArray.length;
  }

  toArray() {
    return this.storedArray;
  }

  sort(indices) {
    indices.sort((left, right)=>{
      return left-right;
    });
    const sortedValues=this.storedArray.filter((elem, index)=>indices.includes(index)).sort(this.sortFunction);
    for (let index of indices){
      this.storedArray[index]=sortedValues.shift();
    }
  }

  setComparator(compareFunction) {
    this.sortFunction=compareFunction;
  }
}

module.exports = Sorter;