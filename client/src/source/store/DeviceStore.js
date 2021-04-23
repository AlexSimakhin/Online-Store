import {makeAutoObservable} from 'mobx';

export default class DeviceStore {
  constructor() {
    this._types = [
      {id: 1, name: 'Компьютер'},
      {id: 2, name: 'Ноутбук'},
    ];
    this._brands = [
      {id: 1, name: 'AMD'},
      {id: 2, name: 'Intel'},
    ];
    this._devices = [
      { id: 1, name: 'Комп 1', price: 20000, rating: 5, img: 'https://www.theitbuffs.com/image/cache/catalog/Products/Dell%20Bundle/41x81v5aR8L._AC_-498x337.jpg' },
      { id: 2, name: 'Комп 2', price: 20000, rating: 5, img: 'https://www.theitbuffs.com/image/cache/catalog/Products/Dell%20Bundle/41x81v5aR8L._AC_-498x337.jpg' },
      { id: 3, name: 'Комп 3', price: 20000, rating: 5, img: 'https://www.theitbuffs.com/image/cache/catalog/Products/Dell%20Bundle/41x81v5aR8L._AC_-498x337.jpg' },
      { id: 4, name: 'Комп 4', price: 20000, rating: 5, img: 'https://www.theitbuffs.com/image/cache/catalog/Products/Dell%20Bundle/41x81v5aR8L._AC_-498x337.jpg' },
      { id: 5, name: 'Комп 4', price: 20000, rating: 5, img: 'https://www.theitbuffs.com/image/cache/catalog/Products/Dell%20Bundle/41x81v5aR8L._AC_-498x337.jpg' },
      { id: 6, name: 'Комп 4', price: 20000, rating: 5, img: 'https://www.theitbuffs.com/image/cache/catalog/Products/Dell%20Bundle/41x81v5aR8L._AC_-498x337.jpg' },
      { id: 7, name: 'Комп 4', price: 20000, rating: 5, img: 'https://www.theitbuffs.com/image/cache/catalog/Products/Dell%20Bundle/41x81v5aR8L._AC_-498x337.jpg' },
      { id: 8, name: 'Комп 4', price: 20000, rating: 5, img: 'https://www.theitbuffs.com/image/cache/catalog/Products/Dell%20Bundle/41x81v5aR8L._AC_-498x337.jpg' },
    ];
    this._selectedType = {};
    this._selectedBrand = {};

    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }

  setBrands(brands) {
    this._brands = brands;
  }

  setDevices(devices) {
    this._devices = devices;
  }

  setSelectedType(type) {
    this._selectedType = type;
  }

  setSelectedBrand(brand) {
    this._selectedBrand = brand;
  }

  get types() {
    return this._types;
  }

  get brands() {
    return this._brands;
  }

  get devices() {
    return this._devices;
  }

  get selectedType() {
    return this._selectedType;
  }

  get selectedBrand() {
    return this._selectedBrand;
  }
};