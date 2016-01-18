/**
 * Implement an algorithm to determine if a string has
 * all unique characters.
 */

/* Main Method */
export function hasAllUniques(str) {
    if (str.length < 2) {
        return true;
    }
    var strHashtable = new HashTable();
    var charArray = str.split('');
    for (var i = 0; i < charArray.length; i++) {
        var addResult = strHashtable.add(charArray[i]);
        if (addResult !== false) {
            return false;
        }
    }
    return true;
};


/* Hash Table Data Structure */
var HashTable = function() {
    this.table = {};
};
HashTable.prototype.add = function(newVal) {
    if (this.table.hasOwnProperty(newVal)) {
        this.table[newVal]++;
        return this.table[newVal];
    } else {
        this.table[newVal] = 1;
        return false;
    }
};
