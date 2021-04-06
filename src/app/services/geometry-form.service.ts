/*Service provides other components data to validate inputs and to build form*/

import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class GeometryFormService {
  constructor(public formBuilder: FormBuilder) {}

  getGeometryForm(
    initShape: string = '',
    initFirstSize: number = null,
    initSecondSize: number = null,
    initThirdSize: number = null
  ) {
    return this.formBuilder.group({
      //form validation
      shape: [initShape],
      firstSize: [
        initFirstSize,
        [
          Validators.required,
          Validators.pattern('^[0-9]{4}$'),
          Validators.min(1000),
          Validators.max(9999),
        ],
      ],
      secondSize: [
        initSecondSize,
        [
          Validators.required,
          Validators.pattern('^[0-9]{4}$'),
          Validators.min(1000),
          Validators.max(9999),
        ],
      ],
      thirdSize: [
        initThirdSize,
        [
          Validators.required,
          Validators.pattern('^[0-9]{4}$'),
          Validators.min(1000),
          Validators.max(9999),
        ],
      ],
    });
  }
}
