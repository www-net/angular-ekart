import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  ListOfString: string[] = ['Mark', 'Steve', 'Merry', 'John', 'Sarah'];
}
