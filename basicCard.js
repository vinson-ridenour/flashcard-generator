'use strict';
// var basicCard = require("./basicCard");

// Basic card constructor
(function() {
    module.exports = function BasicCard(front, back) {
        //scope-safe constructor
        if (!(this instanceof BasicCard)) {
            return new BasicCard(front, back);
        }
        // console.log(this);
        this.front = front;
        this.back = back;
    }
})();