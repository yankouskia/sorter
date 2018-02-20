class Sorter {
  constructor() {
    this.arr = [];
	this.length=0;
  }

  add(element) {
	this.length++;
   this.arr.splice(this.arr.length,0,element);
  }

  at(index) {
    return this.arr[index];
  }

  length() {
    return this.arr.length;
  }

  toArray() {
    return this.arr;
  }

  sort(indices) {
	var tmp=[];
	for (var i=0; i<indices.length;i++)
		{
			tmp[i]=this.arr[indices[i]];
		}
		function compareNumeric(a, b) 
			{
				if (a > b) return 1;
				if (a < b) return -1;
			}
	tmp.sort(compareNumeric);	
	indices.sort(compareNumeric);
  	for (var i=0; i<indices.length;i++)
		{
			this.arr[indices[i]]=tmp[i];
		}
	return this.arr;
  }

  setComparator(compareFunction) {

  }
}
let sorter = new Sorter("");
module.exports = Sorter;
