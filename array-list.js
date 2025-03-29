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
module.exports = CharacterList;