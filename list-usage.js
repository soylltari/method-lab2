const CharacterList = require("./list-implementation");

const list = new CharacterList();

list.append("A");
list.append("B");
list.append("C");
list.append("D");
console.log("List after appending A, B, C, D:", list.toString());
console.log("Length of the list:", list.length());

list.insert("X", 2);
console.log("List after inserting X at index 2:", list.toString());

console.log("Element at index 3:", list.get(3));

list.delete(1);
console.log("List after deleting element at index 1:", list.toString());

list.append("C");
console.log("First occurrence of 'C':", list.findFirst("C"));
console.log("Last occurrence of 'C':", list.findLast("C"));

list.reverse();
console.log("List after reversing:", list.toString());

const clonedList = list.clone();
console.log("Cloned list:", clonedList.toString());

list.deleteAll("C");
console.log("List after deleting all 'C's:", list.toString());

list.clear();
console.log("List after clearing:", list.toString());

const newList = new CharacterList();
newList.append("E");
newList.append("F");
newList.append("G");
clonedList.extend(newList);
console.log("Cloned list after extending with newList:", clonedList.toString());
