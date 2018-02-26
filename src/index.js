class Sorter {
    Sorter() {
        var array = [];
        var x = 0;
    }
    
    add(element) {
        array.push(element);
        //array[array.length] = element;
        x++;
    }

    at(index) {
        return array[index];
    }

    //не длина массива, а кол-во элементов, добавленных методом add
    get length() {
        return i;
    }

    toArray() {
        return array;
    }

    sort(indices) {
        var m = indices.length;
        if (m > 1) {
            for (var i = 1; i < m - 1; i++) {
                var a = array[indices[i-1]];
                var b = array[indices[i]];
                if (a > b) {
                    var c = a;
                    a = b;
                    b = c;
                }
            }
        }
    return array;
    }


    setComparator(compareFunction) {
        // :(
    }
}

module.exports = Sorter;