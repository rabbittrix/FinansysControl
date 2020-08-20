import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-field-error',
  template: `
    <p class="text-danger">
      {{errorMessage}}
    </p>
  `,
  styleUrls: ['./form-field-error.component.css']
})
export class FormFieldErrorComponent implements OnInit {

  @Input('form-control') formControl: FormControl;

  constructor() { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
  }

  public get errorMessage(): string | null {
    if ( this.mustShowErrorMessage() ) {
      return this.getErrorMessage();
    }
    else {
      return null;
    }
  }


  private mustShowErrorMessage(): boolean {
    return this.formControl.invalid && this.formControl.touched;
  }

  private getErrorMessage(): string | null {
    if ( this.formControl.errors.required ) {
      return 'mandatory data';
    }

    else if ( this.formControl.errors.email) {
      return 'invalid email format';
 }

    else if ( this.formControl.errors.minlength){
      const requiredLength = this.formControl.errors.minlength.requiredLength;
      return `must have at least ${requiredLength} characters`;
    }

    else if ( this.formControl.errors.maxlength){
      const requiredLength = this.formControl.errors.maxlength.requiredLength;
      return `must have at most ${requiredLength} characters`;
    }
  }

}
