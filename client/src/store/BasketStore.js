import { makeAutoObservable } from "mobx";

export default class BasketStore {
    constructor() {
        this.products = new Map(); 
        makeAutoObservable(this);
    }

    addProduct(product, quantity) {
        if (this.products.has(product)) {
            this.products.set(product, this.products.get(product) + quantity);
        } else {
            this.products.set(product, quantity);
        }
    }

    removeProduct(product) {
        this.products.delete(product);
    }

    updateProductQuantity(product, quantity) {
        if (quantity <= 0) {
            this.removeProduct(product);
        } else {
            this.products.set(product, quantity);
        }
    }

    getCartProducts() {
        return this.products;
    }

    getTotalProducts() {
        let total = 0;
        for (let quantity of this.products.values()) {
            total += quantity;
        }
        return total;
    }

    getTotalPrice() {
        let totalPrice = 0;
        for (let [product, quantity] of this.products.entries()) {
            totalPrice += product.price * quantity;
        }
        return totalPrice;
    }
}

