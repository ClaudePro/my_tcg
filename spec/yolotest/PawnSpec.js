describe("Pawn", () => {

    const pawnClass = require("../../src/models/pawn");

    var warrior_1;
    var warrior_2;

    warrior_1 = new pawnClass(10, 3, 5); // HP - Attack - Defense
    warrior_2 = new pawnClass(15, 2, 4); // HP - Attack - Defense

    describe("getLife", () => {
        it("should return life points.", () => {
            expect(warrior_1.getLife()).toEqual(jasmine.any(Number));
            expect(warrior_1.getLife()).not.toEqual(jasmine.any(String));

            expect(warrior_2.getLife()).toEqual(jasmine.any(Number));
            expect(warrior_2.getLife()).not.toEqual(jasmine.any(String));
        });
    });

    describe("getStrength", () => {
        it("should return strength points.", () => {
            expect(warrior_1.getStrength()).toEqual(jasmine.any(Number));
            expect(warrior_1.getStrength()).not.toEqual(jasmine.any(String));

            expect(warrior_2.getStrength()).toEqual(jasmine.any(Number));
            expect(warrior_2.getStrength()).not.toEqual(jasmine.any(String));
        });
    });

    describe("getDefense", () => {
        it("should return defense points.", () => {
            expect(warrior_1.getDefense()).toEqual(jasmine.any(Number));
            expect(warrior_1.getDefense()).not.toEqual(jasmine.any(String));

            expect(warrior_2.getDefense()).toEqual(jasmine.any(Number));
            expect(warrior_2.getDefense()).not.toEqual(jasmine.any(String));
        });
    });

    describe("attack / strikeBack", () => {
        it("should attack target and the attacker should recieve a strike back", () => {
            var player1 = warrior_1.life;
            var player2 = warrior_2.life;
            warrior_1.attack(warrior_2);
            expect(warrior_2.life).toEqual(12);
            expect(warrior_2.life).toEqual(player2 - warrior_1.strength);
            expect(warrior_1.life).toEqual(6);
            expect(warrior_1.life).toEqual(player1 - warrior_2.defense);
        });
    });
});