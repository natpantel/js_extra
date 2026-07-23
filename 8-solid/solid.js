class Billing {
    amount;

    constructor(amount) {
        this.amount = amount;
    }
    calculateTotal() {
       return null; 
    }
}

class fixBilling extends Billing {
    constructor(amount) {
        super(amount);
    }

    calculateTotal() {
        return this.amount;
    }
}

class hourBilling extends Billing {
    hours;

    constructor(amount, hours) {
        super(amount);
        this.hours = hours;
    }

    calculateTotal() {
        return this.amount * this.hours;
    }
}

class itemBilling extends Billing {
    items;

    constructor(amount, items) {
        super(amount);
        this.items = items;
    }

    calculateTotal() {
        return this.amount * this.items;
    }
}