
var basicCard = require("./basicCard");
var clozeCard = require("./clozeCard");

//Passing constructor arguments, regardless of the "new" keyword since it's scope-safe constructor

console.log("|===========BASIC FLASHCARD OUTPUT=============|");

var OGPrez = basicCard("Who was the first prez of the US?", "George Washington");
console.log(OGPrez.front);
console.log(OGPrez.back);

var _8ClapEnding = new basicCard("U.C.LLLLL.A", "U.C.L.A F SC!");
console.log(_8ClapEnding.front);
console.log(_8ClapEnding.back);

console.log("|===========CLOZE DELETION OUTPUT=============|");

var OGPrezCloze = clozeCard("George Washington was the first president of the US.", "George Washington");
console.log(OGPrezCloze.fullText);
console.log(OGPrezCloze.partial);
console.log(OGPrezCloze.cloze);