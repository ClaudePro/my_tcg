
class Deck {
    constructor (config) {
        this.deck = config.deck;
    }

    shuffle() {
        if (this.deck.length > 1) {
            var j, x, i;
            for (i = this.deck.length - 1; i > 0; i--) {
                j = Math.floor(Math.random() * (i + 1));
                x = this.deck[i];
                this.deck[i] = this.deck[j];
                this.deck[j] = x;
            }
            return true;   
        }
    }

    draw() {
        if (this.deck.length > 1) {
            return this.deck.shift();
        }
        return false
    }

    insertAt(card, pos) {
        this.deck.splice(pos, 0, card);
        return this.deck;
    }

    getCardsCount() {
        return this.deck.length;
    }
}

module.exports = Deck;