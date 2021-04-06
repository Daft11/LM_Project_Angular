import { Component, OnInit } from '@angular/core';
import { FacadeService } from '../../services/facade.service';
import { CalculateService } from '../../services/calculate.service';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-facade',
  templateUrl: './facade.component.html',
  styleUrls: ['./facade.component.scss'],
})
export class FacadeComponent implements OnInit {
  products: ProductModel[];

  constructor(
    private facadeService: FacadeService,
    private calculateService: CalculateService
  ) {}

  ngOnInit(): void {
    this.products = this.facadeService.getProducts();
  }

  onClickChoose(facadeId: string) {
    const idName = facadeId;
    this.calculateService.setFacadeId(idName);
  }
}
