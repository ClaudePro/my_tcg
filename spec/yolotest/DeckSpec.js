describe("Deck", () => {
    const config = {
        deck: [0,1,2,3,4,5,6,7,8,9]
    }

    const deckClass = require("../../src/models/deck");
    const cards = new deckClass(config);

    describe("draw", () => {
        it("should delete and return the first card", () => {
            expect(cards.deck[0]).toEqual(cards.draw());
            expect(cards.draw()).not.toEqual(cards.deck[Math.floor(Math.random() * cards.deck.length)])
        });
    });

    describe("shuffle", () => {
        it("should shuffle the deck", () => {
            expect(cards.shuffle()).toBeTruthy();
        });
    });

    describe("insertAt", () => {
        it("should insert a card into the deck", () => {
            var card = 20
            var pos = 2;
            cards.insertAt(card, pos);
            expect(config.deck[pos]).toEqual(card);
        });
    });

    describe("getCardsCount", () => {
        it("should return the number of cards inside the deck", () => {
            expect(cards.getCardsCount()).toEqual(config.deck.length);
        });
    });
});