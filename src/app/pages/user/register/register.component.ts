import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterForm } from '../../../entities/forms/register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public model: RegisterForm = new RegisterForm();
  registerForm: FormGroup;

    //   fname: string;
    // lname: string;
    // password: string;
    // email: string;

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = formBuilder.group({
      'fname': ['', Validators.required],
      'lname': ['', Validators.required],
      'password': ['', Validators.compose([
        Validators.required,
        Validators.minLength(7),
        Validators.maxLength(10)
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
    this.registerForm.get('validate').valueChanges.subscribe(
      (validate) => {
        console.log('validate: ', validate);
      }
    );
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

  submit(post: any) {
    console.log('post: ', post);
  }

}
