/*Service provides other components data to validate inputs and to build form*/

import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class GeometryFormService {
  constructor(public formBuilder: FormBuilder) {}

  getGeometryForm(
    initShape: string = '',
    initFirstSize: number = 0,
    initSecondSize: number = 0,
    initThirdSize: number = 0
  ) {
    return this.formBuilder.group({
      //form validation
      shape: [initShape],
      firstSize: [
        initFirstSize,
        [
          Validators.required,
          Validators.pattern('[0-9]*'),
          Validators.minLength(4),
          Validators.maxLength(5),
        ],
      ],
      secondSize: [
        initSecondSize,
        [
          Validators.required,
          Validators.pattern('[0-9]*'),
          Validators.minLength(4),
          Validators.maxLength(5),
        ],
      ],
      thirdSize: [
        initThirdSize,
        [
          Validators.required,
          Validators.pattern('[0-9]*'),
          Validators.minLength(4),
          Validators.maxLength(5),
        ],
      ],
    });
  }
}
