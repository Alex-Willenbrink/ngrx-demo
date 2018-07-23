import { Validator, AbstractControl, NG_VALIDATORS } from "@angular/forms";
import { Directive } from "@angular/core";

@Directive({
  selector: "[numberValidator] [ngModel]",
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: NumberValidatorDirective,
      multi: true
    }
  ]
})
export class NumberValidatorDirective implements Validator {
  validate(control: AbstractControl): { [key: string]: any } | null {
    const value = control.value;
    if (isNaN(Number(value))) {
      return { numberValidatorError: "is not a number" };
    } else {
      return null;
    }
  }
}
