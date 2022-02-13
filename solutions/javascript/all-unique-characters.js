/**
 * Implement an algorithm to determine if a string has
 * all unique characters.
 */

/* Hash Table Data Structure */
const HashTable = function () {
    this.table = {};
};
HashTable.prototype.add = function (newVal) {
    if (this.table.hasOwnProperty(newVal)) {
        this.table[newVal]++;
        return this.table[newVal];
    }
    this.table[newVal] = 1;
    return false;
};


/* Main Method */
export function hasAllUniques(str) {
    if (str.length < 2) {
        return true;
    }
    const strHashtable = new HashTable();
    const charArray = str.split('');
    for (let i = 0; i < charArray.length; i++) {
        const addResult = strHashtable.add(charArray[i]);
        if (addResult !== false) {
            return false;
        }
    }
    return true;
}
