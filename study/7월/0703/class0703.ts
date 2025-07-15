class Product {
    constructor(public name: string, public price: number) {}

    display(): void {
        console.log(`제품명: ${this.name}, 가격: ${this.price}만원`);
    }
}

const product = new Product("Macbook", 150);
product.display();
