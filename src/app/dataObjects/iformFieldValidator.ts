export interface iformFieldValidator {
    validatorName: string;          // e.g.: 'required', 'minLength', 'maxLength', 'pattern', 'email', 'min', 'max'
    validator: any;                 // e.g.: Validators.required, Validators.minLength(2), Validators.maxLength(10), Validators.pattern('^[a-zA-Z]+$'), Validators.email, Validators.min(1), Validators.max(100)
    validatorErrorMessage: string;  // 'This field is required', 'This field must be at least 2 characters long', 'This field must be no more than 10 characters long', 'This field must contain only letters', 'This field must be a valid email address', 'This field must be at least 1', 'This field must be no more than 100'
}