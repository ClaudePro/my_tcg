class Pawn {
    constructor (life, strength, defense) {
        this.life = life;
        this.strength = strength;
        this.defense = defense;
    }

    getLife() {
        return this.life;
    }

    getStrength() {
        return this.strength;
    }

    getDefense() {
        return this.defense;
    }

    // attack(target) {
    //     target.recieveAttack(this);
    // }

    // recieveAttack(opponent, strikeBack = false) {
    //     this.life -= opponent.getStrength();
    //     if (strikeBack = true) {
    //         opponent.life -= opponent.defense;
    //     }
    // }

    attack(target){
        if ((typeof target==="object") && (target!=null)) {
          target.receiveAttack(this);
          return true;
        }
        return false;
      }
    
    receiveAttack(opponent, strikeBack=false) {
        if((typeof opponent==="object") && (opponent!=null)) {
          if (strikeBack) {
            opponent.life-=this.getDefense();
          } else {
            this.life-=opponent.getStrength();
            this.receiveAttack(opponent, true);
          }
          return true;
        } else {
          return false;
        }
    }
}

module.exports = Pawn;