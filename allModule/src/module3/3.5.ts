{
    // access modifiers
    /* ---------------------- */

    class BankAccount {
        public readonly id: number;
        public name: string;
        protected _balance: number; // "protected" property is accessable if it's extended with any child "class"

        // private _balance: number; // "private" property is only accessable with the "class"

        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this._balance = balance
        }

        addDeposit(amount: number) {
           return this._balance = this._balance + amount;
        }

        getBalance() {
           return this._balance;
        }
    }

    class StudentAccount extends BankAccount{
        test(){
            this._balance
        }
    }

    const goribManusherAccount = new BankAccount(133, "Upoma", 6778);

    const myBalance = goribManusherAccount.getBalance()

    const addDeposite = goribManusherAccount.addDeposit(3000);

    console.log(`My balance ${myBalance}`);
    console.log(`My new added ${addDeposite}`);


    // 
}