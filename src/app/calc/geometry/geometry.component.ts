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
  ) {
    this.geometryForm = this.formServcie.getGeometryForm();
  }

  ngOnInit(): void {
    this.geometryForm.patchValue({ shape: 'line' });
    this.disableInputOnShapeChange();
    this.geometryForm.get('shape').valueChanges.subscribe((newShapeName) => {
      this.shapeName = newShapeName;
      this.disableInputOnShapeChange();
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.geometryForm.controls;
  }

  disableInputOnShapeChange() {
    const firstInput = this.geometryForm.controls.firstSize;
    const secondInput = this.geometryForm.controls.secondSize;
    const thirdInput = this.geometryForm.controls.thirdSize;
    firstInput.enable();
    secondInput.enable();
    thirdInput.enable();
    switch (this.shapeName) {
      case 'line':
        secondInput.disable();
        thirdInput.disable();
        break;
      case 'l-left':
        thirdInput.disable();
        break;
      case 'l-right':
        thirdInput.disable();
        break;
    }
  }

  onSubmitClick(): void {
    //passing data from viewed input fields to geometryFormService
    // stop here if form is invalid
    if (this.geometryForm.invalid) {
      console.log('invalid');
      return;
    }
    const shapeName: string = this.geometryForm.value.shape;
    const firstSize: number = this.geometryForm.value.firstSize || null;
    const secondSize: number = this.geometryForm.value.secondSize || null;
    const thirdSize: number = this.geometryForm.value.thirdSize || null;
    this.calculateService.setGeometry(shapeName, [
      firstSize,
      secondSize,
      thirdSize,
    ]); //push new new data
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
