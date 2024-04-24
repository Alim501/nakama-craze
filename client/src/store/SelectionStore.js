import { makeAutoObservable } from "mobx";

export default class SelectionStore {
  constructor() {
    this._categories = []; // массив категорий
    this._anime = [];
    this._sizes = [
      { id: 1, title: "M" },
      { id: 2, title: "L" },
      { id: 3, title: "XL" },
    ]; // массив размеров
    this._products = [];
    this._selectedCategory = null;
    this._selectedAnime = null;
    makeAutoObservable(this);
  }
  // Геттеры
  get products() {
    return this._products;
  }
  get categories() {
    return this._categories;
  }
  getCategoryByID(categoryId) {
    return this.categories.find((category) => category.id === categoryId);
  }
  getAnimeByID(animeId) {
    return this.anime.find((anime) => anime.id === animeId);
  }
  getSizesByID(sizesIds) {
    if (sizesIds === undefined) {
      return [];
    }
    return sizesIds.map((sizeId) =>
      this.sizes.find((size) => size.id === sizeId)
    );
  }
  get sizes() {
    return this._sizes;
  }
  get anime() {
    return this._anime;
  }

  get selectedCategory() {
    return this._selectedCategory;
  }

  get selectedAnime() {
    return this._selectedAnime;
  }

  // Сеттеры
  set products(products) {
    this._products = products;
  }
  set categories(categories) {
    this._categories = categories;
  }
  set sizes(sizes) {
    this._sizes = sizes;
  }
  set anime(anime) {
    this._anime = anime;
  }

  set selectedCategory(category) {
    this._selectedCategory = category;
  }

  set selectedAnime(anime) {
    this._selectedAnime = anime;
  }
}
