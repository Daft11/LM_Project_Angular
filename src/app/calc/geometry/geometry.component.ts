import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GeometryFormService } from 'src/app/services/geometry-form.service';
import { CalculateService } from 'src/app/services/calculate.service';

@Component({
  selector: 'app-geometry',
  templateUrl: './geometry.component.html',
  styleUrls: ['./geometry.component.scss'],
})
export class GeometryComponent implements OnInit {
  shapeName: string = 'line';
  animToWall: string;
  geometryForm: FormGroup;

  constructor(
    private formServcie: GeometryFormService,
    private calculateService: CalculateService
  ) {}

  ngOnInit(): void {
    this.geometryForm = this.formServcie.getGeometryForm();
    this.geometryForm
      .get('shape')
      .valueChanges.subscribe((val) => (this.shapeName = val));
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.geometryForm.controls;
  }

  onSubmitClick(): void {
    //passing data from viewed input fields to geometryFormService
    // stop here if form is invalid
    if (this.geometryForm.invalid) {
      return;
    }
    const shapeName: string = this.geometryForm.value.shape;
    const firstSize: number = this.geometryForm.value.firstSize;
    const secondSize: number = this.geometryForm.value.secondSize;
    const thirdSize: number = this.geometryForm.value.thirdSize;
    this.calculateService.setGeometry(shapeName, [
      firstSize,
      secondSize,
      thirdSize,
    ]); //push new new data and then emit changes
  }

  animWall(inputId: number): void {
    if (this.shapeName === 'line') this.animToWall = 'top';
    if (this.shapeName === 'l-left') {
      this.animToWall = inputId === 0 ? 'left' : 'top';
    }
    if (this.shapeName === 'l-right') {
      this.animToWall = inputId === 0 ? 'top' : 'right';
    }
    this.animToWall = inputId === 0 ? 'left' : inputId === 1 ? 'top' : 'right';
  }
}
