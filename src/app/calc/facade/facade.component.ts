import { Component, OnInit } from '@angular/core';
import { FacadeService } from './facade.service';
import { FacadeModel } from './facade.model';

@Component({
  selector: 'app-facade',
  templateUrl: './facade.component.html',
  styleUrls: ['./facade.component.scss'],
})
export class FacadeComponent implements OnInit {
  products: FacadeModel[];

  constructor(private facadeService: FacadeService) {}

  ngOnInit(): void {
    this.products = this.facadeService.getProducts();
  }
}
