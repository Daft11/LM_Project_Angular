import { Component, OnInit } from '@angular/core';
import { CountertopService } from '../../services/countertop.service';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-countertop',
  templateUrl: './countertop.component.html',
  styleUrls: ['./countertop.component.scss'],
})
export class CountertopComponent implements OnInit {
  products: ProductModel[];

  constructor(private countertopService: CountertopService) {}

  ngOnInit(): void {
    this.products = this.countertopService.getProducts();
  }
}
