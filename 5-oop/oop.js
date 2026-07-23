const Character = function (race, name, language) {
    this.race = race,
    this.name = name, 
    this.language = language
}

Character.prototype.speak = function() {
    console.log(this.name, this.language)
}


const Ork = function(race, name, language, weapon) {
    Character.call(this, race, name, language);
    this.weapon = weapon;
}

Ork.prototype = new Character();
Ork.prototype.constructor = Ork;

Ork.prototype.hit = function() {
    console.log('hit by ' + this.weapon)
}

const Elf = function(race, name, language, spell) {
    Character.call(this, race, name, language);
    this.spell = spell;
}

Elf.prototype = new Character();
Elf.prototype.constructor = Elf;

Elf.prototype.cast = function() {
    console.log('cast ' + this.spell)
}
