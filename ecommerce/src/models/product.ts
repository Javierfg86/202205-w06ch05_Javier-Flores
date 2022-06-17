export interface iProduct {
    id: number;
    name: string;
    price: number;
    stock: boolean;
    onSale: boolean;
    category: 'A' | 'B';
}

export class Product {
    static generateId(): number {
        return Math.ceil(Math.random() * 100_000);
    }
    onSale: boolean;
    id: number;
    stock: boolean;
    constructor(
        public name: string,
        public price: number,
        public category: 'A' | 'B'
    ) {
        this.id = Product.generateId();
        this.onSale = true;
        this.stock = true;
        this.price = 0;
    }
}
