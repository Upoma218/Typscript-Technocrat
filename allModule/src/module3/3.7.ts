{
    // static
    /* -------------------- */

    class Counter {
        static count: number = 0;

        static increment() {
            return (Counter.count = Counter.count + 1);
        } // That means, 'static' use korle kono property k access korar jonno "this" use korle kaj hobe na, directly Class er nam diye access korte hobe. 

        static decrement() {
            return (Counter.count = Counter.count - 1);
        }
    }

console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.decrement());
console.log(Counter.decrement());
console.log(Counter.decrement());
console.log(Counter.decrement());
console.log(Counter.decrement());
console.log(Counter.decrement());

// That means , every time the result will change from one memory

    // 
}