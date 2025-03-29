class CharacterList {
    constructor() {
        this._list = [];
    }

    length() {
        return this._list.length;
    }

    append(element) {
        this._list.push(element);
    }

    insert(element, index) {
        if (index < 0 || index > this._list.length) {
            throw new Error("Invalid index");
        }
        this._list.splice(index, 0, element);
    }

    delete(index) {
        if (index < 0 || index >= this._list.length) {
            throw new Error("Invalid index");
        }
        return this._list.splice(index, 1)[0];
    }

    deleteAll(element) {
        this._list = this._list.filter(e => e !== element);
    }

    get(index) {
        if (index < 0 || index >= this._list.length) {
            throw new Error("Invalid index");
        }
        return this._list[index];
    }

    clone() {
        let newList = new CharacterList();
        newList._list = [...this._list];
        return newList;
    }

    reverse() {
        this._list.reverse();
    }

    findFirst(element) {
        return this._list.indexOf(element);
    }

    findLast(element) {
        return this._list.lastIndexOf(element);
    }

    clear() {
        this._list = [];
    }

    extend(elements) {
        this._list = this._list.concat(elements._list);
    }
}

// Checking the functionality of CharacterList
let list = new CharacterList();
list.append('A');
list.append('B');
list.append('C');
list.append('A');
console.log(list, ", length: ", list.length());

list.insert('D', 1);
console.log("Insert: ", list.get(1));

list.delete(2); // B
console.log("List length after using method delete: ", list.length());

list.deleteAll('A');
console.log("List length after using method deleteAll: ",list.length());

console.log("Find first: ",list.findFirst('C'));
console.log("Find last: ", list.findLast('D'));

console.log(list);
list.reverse();
console.log("Reverse: ", list);

let clonedList = list.clone();
console.log("Cloned list: ", clonedList);

list.clear();
console.log("List length after using method clear: ", list.length());

let list1 = new CharacterList();
list1.append('X');
list1.append('Y');

let list2 = new CharacterList();
list2.append('A');
list2.append('B');

list1.extend(list2);
console.log("Extend: ", list1);
