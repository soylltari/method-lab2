# List Implementation

This application demonstrates how to work with a typed list. First, list based on built-in arrays/lists version was implemented, then one-way linked ring list version. This application has a use case and is covered by tests using Jest.

## Variant

The number in the group list: 22. Variant number: 22 mod 4 = 2

Tasks by variant 2: 
- First list implementation: list based on built-in arrays/lists.
- Second list implementation: one-way linked ring list.

## Building and Running Tests

1. Ensure Node.js is installed on your system
2. Clone this repository: 
```bash
git clone https://github.com/soylltari/method-lab2
```
3. Download packages:
```bash
npm install
```
4. Run application and tests:

Run application:
```bash
node list-usage.js
```
Run tests:
```bash
npm test
```

## Commit to dropped test

[Drop tests](https://github.com/soylltari/method-lab2/commit/4283cee47eda14fd040e6a56487bcd7dff3176d1)

## Conclusion

Writing tests forced me to think about edge cases, helping identify issues before they became bigger problems. Every time I refactored or modified the CharacterList, tests ensured I didn’t accidentally break functionality. Plus, instead of manually checking list operations, running tests immediately pinpointed where things went wrong.

However, writing tests took time and some tests seemed trivial, especially for simple methods. And even with passing tests, there may still be flaws in code.

In conclusion, it was a good experience, thanks to which I learned how to write tests for my chosen programming language.