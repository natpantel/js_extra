class Character {
    #race;
    #name;
    #language;

    constructor(race, name, language) {
        this.#race = race,
        this.#name = name,
        this.#language = language
    }

    speak() {
        console.log(this.#name, this.#language)   
    }

}

class Ork extends Character {
    #weapon;

    constructor(race, name, language, weapon) {
        super(race, name, language);
        this.#weapon = weapon;
    }

    speak() {
        console.log('Arhh')
    }

    hit () {
        console.log('hit by ' + this.#weapon)
    }
}

class Elf extends Character {
    #spell;

    constructor(race, name, language, spell) {
        super(race, name, language);
        this.#spell = spell;
    }

    speak() {
        console.log('Hello, my friend')
    }

    cast () {
        console.log('cast ' + this.#spell)
    }
}