class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class CharacterList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    length() {
        return this.size;
    }

    append(element) {
        const newNode = new Node(element);
        if (!this.head) {
            this.head = newNode;
            newNode.next = this.head;
        } else {
            let current = this.head;
            while (current.next !== this.head) {
                current = current.next;
            }
            current.next = newNode;
            newNode.next = this.head;
        }
        this.size++;
    }

    insert(element, index) {
        if (index < 0 || index > this.size) {
            throw new Error("Invalid index");
        }
        const newNode = new Node(element);
        if (index === 0) {
            if (!this.head) {
                this.head = newNode;
                newNode.next = this.head;
            } else {
                newNode.next = this.head;
                let current = this.head;
                while (current.next !== this.head) {
                    current = current.next;
                }
                current.next = newNode;
                this.head = newNode;
            }
        } else {
            let current = this.head;
            for (let i = 0; i < index - 1; i++) {
                current = current.next;
            }
            newNode.next = current.next;
            current.next = newNode;
        }
        this.size++;
    }

    delete(index) {
        if (index < 0 || index >= this.size) {
            throw new Error("Invalid index");
        }
        let deletedValue;
        if (index === 0) {
            deletedValue = this.head.value;
            if (this.size === 1) {
                this.head = null;
            } else {
                let current = this.head;
                while (current.next !== this.head) {
                    current = current.next;
                }
                this.head = this.head.next;
                current.next = this.head;
            }
        } else {
            let current = this.head;
            for (let i = 0; i < index - 1; i++) {
                current = current.next;
            }
            deletedValue = current.next.value;
            current.next = current.next.next;
        }
        this.size--;
        return deletedValue;
    }

    deleteAll(element) {
        let current = this.head;
        let prev = null;
        let count = this.size;
        while (count > 0) {
            if (current.value === element) {
                if (prev) {
                    prev.next = current.next;
                } else {
                    this.head = current.next;
                }
                this.size--;
            } else {
                prev = current;
            }
            current = current.next;
            count--;
        }
    }

    get(index) {
        if (index < 0 || index >= this.size) {
            throw new Error("Invalid index");
        }
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current.value;
    }

    clone() {
        const newList = new CharacterList();
        let current = this.head;
        let count = this.size;
        while (count > 0) {
            newList.append(current.value);
            current = current.next;
            count--;
        }
        return newList;
    }

    reverse() {
        let prev = null;
        let current = this.head;
        let next = null;
        let count = this.size;
        while (count > 0) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
            count--;
        }
        this.head.next = prev;
        this.head = prev;
    }

    findFirst(element) {
        let current = this.head;
        let index = 0;
        let count = this.size;
        while (count > 0) {
            if (current.value === element) {
                return index;
            }
            current = current.next;
            index++;
            count--;
        }
        return -1;
    }

    findLast(element) {
        let current = this.head;
        let index = 0;
        let lastIndex = -1;
        let count = this.size;
        while (count > 0) {
            if (current.value === element) {
                lastIndex = index;
            }
            current = current.next;
            index++;
            count--;
        }
        return lastIndex;
    }

    clear() {
        this.head = null;
        this.size = 0;
    }

    extend(elements) {
        let current = elements.head;
        let count = elements.size;
        while (count > 0) {
            this.append(current.value);
            current = current.next;
            count--;
        }
    }
}
module.exports = CharacterList;