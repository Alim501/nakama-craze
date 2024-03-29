import { makeAutoObservable } from "mobx";

export default class ProductStore {
    constructor(title, price, desc, icon, anime, category, sizes, colors) {
        this._title = title;
        this._price = price;
        this._desc = desc;
        this._icon = icon;
        this._anime = anime;
        this._category = category;
        this._sizes = sizes; // массив размеров
        this._colors = colors; // массив цветов
        makeAutoObservable(this);
    }

    // Геттеры
    get title() {
        return this._title;
    }

    get price() {
        return this._price;
    }

    get desc() {
        return this._desc;
    }

    get icon() {
        return this._icon;
    }

    get anime() {
        return this._anime;
    }

    get category() {
        return this._category;
    }

    get sizes() {
        return this._sizes;
    }

    get colors() {
        return this._colors;
    }

    // Сеттеры
    set title(title) {
        this._title = title;
    }

    set price(price) {
        this._price = price;
    }

    set desc(desc) {
        this._desc = desc;
    }

    set icon(icon) {
        this._icon = icon;
    }

    set anime(anime) {
        this._anime = anime;
    }

    set category(category) {
        this._category = category;
    }

    set sizes(sizes) {
        this._sizes = sizes;
    }

    set colors(colors) {
        this._colors = colors;
    }
}
