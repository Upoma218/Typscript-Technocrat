{
// getter and setter
/* ---------------------------- */

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


// setter
/* -------------------- */

set deposit(amount: number){
    this._balance = this._balance + amount
}


    //    public addDeposit(amount: number) {
    //        return this._balance = this._balance + amount;
    //     }

    // getter
    /* -------- */

    get balance(){
        return this._balance
    }

    //     public getBalance() {
    //        return this._balance;
    //     }
    }

    const goribManusherAccount = new BankAccount(133, "Upoma", 5000);

   /*  const myBalance = goribManusherAccount.getBalance(); //function call korte hocche

    const addDeposite = goribManusherAccount.addDeposit(3000); //function call korte hocche */

    goribManusherAccount.deposit = 5000;
    const myBalance = goribManusherAccount.balance;

    console.log(`My balance ${myBalance}`);


    // 
}



// 
}