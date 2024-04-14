import { makeAutoObservable } from "mobx";

export default class SelectionStore {
  constructor() {
    this._categories = [
      { id: 1, title: "Футболки" },
      { id: 2, title: "Худи" },
    ];
    this._anime = [
      { id: 1, title: "Berserk",img:"berserk.png" },
      { id: 2, title: "Vagabond",img:"vaga.png" },
      { id: 3, title: "Sage of Vinland",img:"sage.png" },
      { id: 4, title: "Baki",img:"baki.png" },
      { id: 5, title: "Vagabond",img:"vaga.png" },
    ];
    this._products=[
      {id:1,title:"GUTS",price:11900,category:"ФУТБОЛКА",anime:"BERSERK",icon:"berserk.png",colors:[{code:"#F3F3F2",title:"WHITE"},{code:"#262626",title:"BLACK"}]},
      {id:2,title:"GUTS V2",price:8900,category:"ФУТБОЛКА",anime:"BERSERK",icon:"berserk.png",colors:[{code:"#262626",title:"BLACK"}]},
      {id:3,title:"MUSASHI",price:9900,category:"ФУТБОЛКА",anime:"VAGABOND",icon:"vaga.png",colors:[{code:"#F3F3F2",title:"WHITE"}]},
      {id:4,title:"BAKI",price:11900,category:"ФУТБОЛКА",anime:"BAKI THE GRAPPLER",icon:"baki.png",colors:[{code:"#F3F3F2",title:"WHITE"},{code:"#262626",title:"BLACK"}]},
      {id:5,title:"THORFIN",price:19900,category:"ХУДИ",anime:"SAGE OF VINLAND",icon:"sage.png",colors:[{code:"#262626",title:"BLACK"}]}
    ]
    this._selectedCategory=null;
    this._selectedAnime=null;
    makeAutoObservable(this);
  }

  // Геттеры
  get products() {
    return this._products;
  }
  get categories() {
    return this._categories;
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
    this._products=products;
  }
  set categories(categories) {
    this._categories = categories;
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
