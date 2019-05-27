
class Hand {
    constructor (config) {
        this.hand = config.hand;
        this.limit = config.limit;
    }

    addCard(card) {
        if (this.hand.length < this.limit) {
            this.hand.push(card);
            return true;
        }
        return false;
    }

    removeCard(pos) {
        return this.hand[pos] === "undefined" ? false : this.hand.splice(pos, 1)
    }

    getAllCards() {
        return this.hand;
    }

    getCardsCount() {
        return this.hand.length;
    }
}

module.exports = Hand;