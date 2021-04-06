import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ProductModel } from 'src/app/models/product.model';
import { CalculateService } from 'src/app/services/calculate.service';
import { FacadeService } from 'src/app/services/facade.service';
import { CountertopService } from 'src/app/services/countertop.service';

@Component({
  selector: 'app-selected',
  templateUrl: './selected.component.html',
  styleUrls: ['./selected.component.scss'],
})
export class SelectedComponent implements OnInit, OnDestroy {
  @Input() typeOfProperty: string;
  isSelected = false;
  selectedArticle: string = null;
  selectedName: string = null;
  selectedImgUrl: string = null;
  productSub: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private calcService: CalculateService,
    private facadeService: FacadeService,
    private countertopService: CountertopService
  ) {}

  ngOnInit() {
    this.setArticle();
    this.setSelected(this.typeOfProperty);
    this.productSub = this.calcService.selectionChanged.subscribe(
      (typeOfProp: string) => {
        this.setSelected(typeOfProp);
      }
    );
  }

  setArticle() {
    if (this.typeOfProperty === 'facade') {
      this.selectedArticle = 'Выбраная коллекция:';
    } else if (this.typeOfProperty === 'countertop') {
      this.selectedArticle = 'Выбраная столешница:';
    }
  }

  setSelected(typeOfSelectedProperty: string) {
    let productId: string = null;
    let currentProduct: ProductModel = null;
    if (typeOfSelectedProperty === 'facade') {
      productId = this.calcService.getFacadeId();
      if (!productId) {
        this.isSelected = false;
        return;
      }
      currentProduct = this.facadeService.getProductById(productId);
      this.isSelected = true;
    } else if (typeOfSelectedProperty === 'countertop') {
      productId = this.calcService.getCoutertopId();
      if (!productId) {
        this.isSelected = false;
        return;
      }
      currentProduct = this.countertopService.getProductById(productId);
      this.isSelected = true;
    }

    this.selectedName = currentProduct.name;
    this.selectedImgUrl = currentProduct.imgUrl;
  }

  onNextClick() {
    if (this.typeOfProperty === 'facade') {
      this.router.navigate(['../countertop'], { relativeTo: this.route });
    } else if (this.typeOfProperty === 'countertop')
      this.router.navigate(['../geometry'], { relativeTo: this.route });
  }

  ngOnDestroy() {
    this.productSub.unsubscribe();
  }
}
