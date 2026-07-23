class Car {
    #mark;
    #model;
    #mileage;

    constructor(mark, model, mileage) {
        this.#mark = mark;
        this.#model = model;
        this.#mileage = mileage;
    }

    set newMiliage (mileage) {
        if (mileage > 0) {
            this.#mileage = mileage;
        }
    }

    info () {
        console.log(this.#mark, this.#model, this.#mileage)
    }
}