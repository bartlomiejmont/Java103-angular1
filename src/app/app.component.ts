import { Component } from '@angular/core';
import { Product } from './product/product.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sda1';
  products: Product[] = [
  {
    name: "deska do prasowania",
    description: "",
  },
  {
    name: "mikrofon",
    description: "Dynamiczny mikrofon Vordon został dopracowany przez naszych specjalistów, tak aby spełnić wymagania zarówno amatorów sobotniego karaoke jak również podczas profesjonalnych prób zespołów muzycznych czy prezentacji i konferencji.",
  },
  {
    name: "kubek",
    description: "niencwenb enweu fnweufn weifn ew"
  }
  ] 
}
