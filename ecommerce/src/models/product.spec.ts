import { Product } from './product';

describe('Given the class Product', () => {
    describe('When I instantiate an object', () => {
        //  Arrange - Act
        const p = new Product('', 0, 'A');
        test(`Then an object should be created with instance properties: 
            name · price · onSale and stock`, () => {
            // Assert
            expect(p).toBeInstanceOf(Product);
            expect(p).toHaveProperty('name');
            expect(p).toHaveProperty('price');
            expect(p).toHaveProperty('onSale');
            expect(p).toHaveProperty('stock');
        });
    });
});
