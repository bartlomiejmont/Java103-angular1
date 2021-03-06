import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  @Input()
  product!: Product;

  constructor() {
  }

  ngOnInit(): void {
  }

  handleClick(){
    console.log("click");
  }
}

export type Product = {
  name: string,
  description: string
}