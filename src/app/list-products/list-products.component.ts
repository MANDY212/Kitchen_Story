import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export class Product {
  constructor(public name: string, public price: number) {}
}

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css'],
})
export class ListProductsComponent implements OnInit {
  products: Product[] = [new Product('Burger', 200), new Product('Pizza', 200)];
  cart: string[] = [];
  isAdmin: boolean =
    sessionStorage.getItem('isAdmin') === 'true' ? true : false;
  searchText: any;
  productName: string = '';
  productPrice: number = 0;
  constructor(public router: Router) {}

  ngOnInit(): void {
    console.log();
  }

  addProduct(name: string, price: number): void {
    this.products.push(new Product(name, price));
  }

  removeProduct(): void {
    this.products.pop();
  }

  addToCart(name: string): void {
    alert(`${name} has been Added to Cart`);
    this.cart.push(name);
  }

  removeFromCart(name: string): void {
    this.cart.pop();
    alert(`${name} has been Removed from Cart`);
  }

  checkout() {
    this.router.navigate(['summary']);
  }
}
