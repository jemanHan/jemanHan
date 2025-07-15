class Counter {
   static count:number = 0;

   static increment(){
    Counter.count++;

}
static getCount() {
    console.log(Counter.count)
}
}

Counter.increment();
Counter.increment();
Counter.increment();
Counter.getCount();