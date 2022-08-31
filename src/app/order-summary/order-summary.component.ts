import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export class Item {
  constructor(public name: string) {}
}
@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css'],
})
export class OrderSummaryComponent implements OnInit {
  items: Item[] = [new Item('Burger'), new Item('Pizza'), new Item('Lassagna')];
  amount: number = 7;
  constructor(public router: Router) {}

  ngOnInit(): void {}

  pay(amount: number) {
    if (
      confirm(
        `You will be Re-directed to the Payment Gateway for Payment of ${amount}`
      )
    ) {
      this.router.navigate(['payment']);
    }
  }
}
