class Counter {
    private count: number;

    constructor() {
        this.count = 0;
    }

    increase(): void {
        this.count++;
    }

    show(): void {
        console.log(this.count);
    }
}

const counter = new Counter();
counter.increase();
counter.increase();
counter.increase();
counter.increase();
counter.show();
