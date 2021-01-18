import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-geometry',
  templateUrl: './geometry.component.html',
  styleUrls: ['./geometry.component.scss'],
})
export class GeometryComponent implements OnInit {
  shape: string = 'line';
  animToWall: string;

  constructor() {}

  ngOnInit(): void {}

  getShape(): string {
    return 'l-left';
  }

  animWall(inputId: number): void {
    if (this.shape === 'line') this.animToWall = 'top';
    if (this.shape === 'l-left') {
      this.animToWall = inputId === 0 ? 'left' : 'top';
    }
    if (this.shape === 'l-right') {
      this.animToWall = inputId === 0 ? 'top' : 'right';
    }
    this.animToWall = inputId === 0 ? 'left' : inputId === 1 ? 'top' : 'right';
  }
}
