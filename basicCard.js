'use strict';

// module.exports = BasicCard;

function BasicCard(front, back) {
    console.log(this);
    this.front = front;
    this.back = back;
}

var OGPresident = new BasicCard("Who was the first president of the US?", "George Washington");
console.log(OGPresident.front);
console.log(OGPresident.back);