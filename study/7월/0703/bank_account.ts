class BankAccount {
    #balance: number;

    constructor() {
        this.#balance = 100;
    }

    deposit(amount: number): void {
        this.#balance += amount;
    }

    getBalance(): void {
        console.log(this.#balance);
    }

    setBalance(amount: number): void {
        this.#balance = amount * 1.1;
    }
}

const account = new BankAccount();
account.setBalance(1000);
account.getBalance();
