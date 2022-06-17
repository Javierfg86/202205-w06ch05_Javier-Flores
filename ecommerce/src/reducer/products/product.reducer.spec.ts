import { Product } from '../../models/product';
import { productReducer } from './product.reducer';
import * as ac from './action.creator';
import { AnyAction } from '@reduxjs/toolkit';
const mockProduct: Product = {
    id: 0,
    name: '',
    price: 0,
    stock: true,
    onSale: false,
    category: 'A',
};

describe('Given our reducer', () => {
    describe('When calling with load action', () => {
        test('Then it should return a new state with the Products in the action payload', () => {
            const newState = productReducer(
                [],
                ac.loadProductsAction([mockProduct])
            );
            expect(newState).toHaveLength(1);
            expect(newState).toEqual([mockProduct]);
        });
    });
    describe('When calling with add action', () => {
        test('Then it should add a Product', () => {
            const initialState: Array<Product> = [mockProduct];
            const addedProduct = { ...mockProduct, id: 1, name: 'n' };
            const actionForTest = ac.addProductAction(addedProduct);

            const newState = productReducer(initialState, actionForTest);

            expect(newState).toEqual([mockProduct, addedProduct]);
        });
    });
    describe('When calling with update action', () => {
        test('Then it should update state', () => {
            const initialState: Array<Product> = [mockProduct];
            const updatedProduct = { ...mockProduct, name: 'n' };
            const actionForTest = ac.updateProductAction(updatedProduct);

            const newState = productReducer(initialState, actionForTest);

            expect(newState).toStrictEqual([updatedProduct]);
        });
    });
    describe('When calling with delete action', () => {
        test('Then it should delete Product from the array', () => {
            const initialState: Array<Product> = [mockProduct];
            const actionForTest = ac.deleteProductAction(mockProduct);

            const newState = productReducer(initialState, actionForTest);

            expect(newState).toEqual([]);
        });
    });
    describe('When calling another action', () => {
        test('Then it should return same state', () => {
            const initialState: Array<Product> = [mockProduct];
            const actionForTest: AnyAction = {
                type: undefined,
            };

            const newState = productReducer(initialState, actionForTest);

            expect(newState).toEqual(newState);
        });
    });
});
