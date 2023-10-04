// Exercise 1

// A fellow student shows you this code.  When he runs it, he expects it to
// wait three seconds, then write "Ding!" to the console.  Instead, it writes
// "Ding!" immediately.  Find the bug and fix it.

function writeDing() {
  console.log("Ding!");
}

let timerId = setTimeout(writeDing, 3000);
//remove parens, parens = immediate call

// Exercise 2

// Javascript arrays have a built-in sort method that can take
// a callback to tell it how to compare the things you want to sort.

// Research the array sort method.

// Write the sorting callback as a named function declaration

// Write the callback function to provide to the sort method so that
// the following code sorts the words from shortest to longest.

const words = ["short", "medium", "delicious", "nice", "lengthy"];

function shortestToLongest(a, b) {
  return a.length - b.length;
}
// The sort method sorts "in place", that is, it modifies the array
words.sort(shortestToLongest);
console.log(words);

// Check that logging words now outputs
// ["nice", "short", "medium", "lengthy", "delicious"]

// Exercise 3
//
// Filter the words array from above to create a new array
// named longWords that includes only the words with 7 or more
// characters

const longWords = words.filter(/* write an anonymous inline function here */);

// Check that logging longWords outputs
// ["lengthy", "delicious"]
