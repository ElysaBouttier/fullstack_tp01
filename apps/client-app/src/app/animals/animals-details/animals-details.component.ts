import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'animeet-animals-details',
  templateUrl: './animals-details.component.html',
  styleUrls: ['./animals-details.component.scss']
})
export class AnimalsDetailsComponent {
  formGroup = new FormGroup({
    id: new FormControl(1, [Validators.required, Validators.min(1)]),
    name: new FormControl('', [Validators.required]),
    age: new FormControl(1, [Validators.required, Validators.min(1), Validators.max(15)]),
    gender: new FormControl('', Validators.required)
  });

  save(): void {
    //
  }

}
