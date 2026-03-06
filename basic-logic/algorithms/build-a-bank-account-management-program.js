class BankAccount {
    constructor() {
        this.balance = 0
        this.transactions = []
    }

    deposit(amount) {
        if (amount <= 0) {
            return "Deposit amount must be greater than zero."
        }
        this.balance += amount;
        this.transactions.push({ type: "deposit", amount: amount });
        return `Successfully deposited $${amount}. New balance: $${this.balance}`;
    };


    withdraw(amount) {
        if (amount <= 0 || amount > this.balance) { return "Insufficient balance or invalid amount." }

        this.balance -= amount;
        this.transactions.push({ type: "withdraw", amount: amount })
        return `Successfully withdrew $${amount}. New balance: $${this.balance}`;

    };

    checkBalance() {
        return `Current balance: $${this.balance}`;
    };


    listAllDeposits() {
        const amounts = this.transactions
            .filter(t => t.type === "deposit")
            .map(a => a.amount)

        return `Deposits: ${amounts.join(",")}`
    }

    listAllWithdrawals() {
        const amounts = this.transactions
            .filter(t => t.type === "withdraw")
            .map(a => a.amount)

        return `Withdrawals: ${amounts.join(",")}`
    }
}

const myAccount = new BankAccount();

myAccount.deposit(300)
myAccount.deposit(500)
myAccount.deposit(120)
myAccount.deposit(1000000)
myAccount.deposit(5)

myAccount.withdraw(20)
myAccount.withdraw(7)

console.log(myAccount.checkBalance())
console.log(myAccount.listAllWithdrawals())
console.log(myAccount.listAllDeposits())
