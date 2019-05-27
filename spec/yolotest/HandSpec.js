describe("Hand", () => {
    const config = {
        hand: [0,1,2,3,4,5,],
        limit: 7
    }

    const handClass = require("../../src/models/hand");
    const hand = new handClass(config);

    describe("addCard", () => {
        it("should add a card at the end of the hand.", () => {
            expect(hand.addCard(22)).toBe(true);
        });
    });

    describe("removeCard", () => {
        it("should remove a card.", () => {
            var arrayLength = config.hand.length;
            hand.removeCard(4)
            expect(config.hand.length).toEqual(arrayLength -1);
        });
    });

    describe("getAllCards", () => {
        it("should return an array of the cards in the hand", () => {
            expect(hand.getAllCards(hand)).toEqual(hand.hand);
        });
    });

    describe("getCardsCount", () => {
        it("should return all the cards in the hand", () => {
            expect(hand.getCardsCount()).toEqual(config.hand.length);
        });
    });
});