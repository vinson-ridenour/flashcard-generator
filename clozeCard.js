'use strict';

// Cloze card constructor
(function() {
    module.exports = function ClozeCard(text, cloze) {
        //scope-safe constructor
        if (text.indexOf(cloze) !== -1) {
            if (this instanceof ClozeCard) {
                this.cloze = cloze;
                this.fullText = text;
                this.partial = text.replace(cloze, "ellipsis");
            }
            else {
                return new ClozeCard(text, cloze);
            }
        }
        else {
            console.log("Try again.");
        }
    }
})();