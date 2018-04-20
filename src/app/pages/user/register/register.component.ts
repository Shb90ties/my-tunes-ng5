import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterForm } from '../../../entities/forms/register';
import { TranslateService } from '@ngx-translate/core';

enum errorKeys {
  default = 'error-fill',
  email = 'error-email',
  password = 'error-password',
  fname = 'error-name',
  lname = 'error-name'
};

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public model: RegisterForm = new RegisterForm();
  registerForm: FormGroup;
  public errorMsg: string = errorKeys.default;

  constructor(
    private formBuilder: FormBuilder,
    private translate: TranslateService
  ) {
    this.registerForm = formBuilder.group({
      'fname': ['', Validators.required],
      'lname': ['', Validators.required],
      'password': ['', Validators.compose([
        Validators.required,
        Validators.minLength(7),
        Validators.maxLength(10),
        Validators.pattern('[a-zA-Z]+')
      ])],
      'email': ['', Validators.compose([
        Validators.required,
        Validators.email
      ])],
      'validate': ''
    });
  }

  ngOnInit() {
    /** Register to the form observable whenever there's a change */
    // this.registerForm.get('validate').valueChanges.subscribe(
    //   (validate) => {
    //     console.log('validate: ', validate);
    //   }
    // );
    this.registerForm.valueChanges.subscribe(() => { this.updateErrorMsgOnChange(); });
  }



  // ngOnInit() {

  //   this.rForm.get('validate').valueChanges.subscribe(
  //     (validate) => {
  //       if (validate == '1') {
  //         this.rForm.get('name').setValidators([Validators.required, Validators.minLength(3)]);
  //         this.titleAlert = "You need to specify at least 3 characters";
  //       } else {
  //         this.rForm.get('name').setValidators(Validators.required);
  //       }
  //       this.rForm.get('name').updateValueAndValidity();
  //     }
  //   )
  // }

  // addPost(post) {
  //   this.description = post.description;
  //   this.name = post.name;
  // }

  submit(post: any): void {
    console.log('post: ', post);
  }

  reset(): void {
    this.registerForm.reset();
  }
  
  updateErrorMsgOnChange(): void {
    /** uupdates/remove the error msg when one of the input changes */
    for (let inputName in this.registerForm.controls) {
      let input = this.registerForm.controls[inputName];
      if (!input.valid && errorKeys[inputName]) {
        this.errorMsg = errorKeys[inputName];
        break;
      } else if (!input.valid) {
        this.errorMsg = errorKeys.default;
      }
    }
  }

}
