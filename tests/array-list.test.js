const CharacterList = require("../list-implementation");

describe("CharacterList", () => {
    let list;

    beforeEach(() => {
        list = new CharacterList();
    });

    test("Should return length 0 for a new list", () => {
        expect(list.length()).toBe(0);
    });

    test("Should add an element to the list", () => {
        list.append('A');
        expect(list.length()).toBe(1);
        expect(list.get(0)).toBe('A');
    });

    test("Should insert an element at a specific index", () => {
        list.append('A');
        list.append('C');
        list.insert('B', 1);
        expect(list.get(1)).toBe('B');
    });

    test("Should throw an error for invalid insert index", () => {
        expect(() => list.insert('X', -1)).toThrow("Invalid index");
        expect(() => list.insert('X', 100)).toThrow("Invalid index");
    });

    test("Should delete an element at a specific index", () => {
        list.append('A');
        list.append('B');
        list.append('C');
        expect(list.delete(1)).toBe('B');
        expect(list.length()).toBe(2);
    });

    test("Should throw an error for invalid delete index", () => {
        expect(() => list.delete(0)).toThrow("Invalid index");
    });

    test("Should remove all occurrences of an element", () => {
        list.append('A');
        list.append('B');
        list.append('A');
        list.deleteAll('A');
        expect(list.length()).toBe(1);
        expect(list.get(0)).toBe('B');
    });

    test("Should clone the list", () => {
        list.append('A');
        list.append('B');
        let clone = list.clone();
        expect(clone.length()).toBe(2);
        expect(clone.get(0)).toBe('A');
        expect(clone.get(1)).toBe('B');
    });

    test("Should reverse the list", () => {
        list.append('A');
        list.append('B');
        list.append('C');
        list.reverse();
        expect(list.get(0)).toBe('C');
        expect(list.get(1)).toBe('B');
        expect(list.get(2)).toBe('A');
    });

    test("Should find first and last occurrences", () => {
        list.append('A');
        list.append('B');
        list.append('A');
        expect(list.findFirst('A')).toBe(0);
        expect(list.findLast('A')).toBe(2);
    });

    test("Should clear the list", () => {
        list.append('A');
        list.clear();
        expect(list.length()).toBe(0);
    });

    test("Should extend a list", () => {
        let list1 = new CharacterList();
        let list2 = new CharacterList();
        list1.append('X');
        list2.append('Y');
        list1.extend(list2);
        expect(list1.length()).toBe(2);
        expect(list1.get(1)).toBe('Y');
    });    
});
