import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  signupForm: FormGroup;

  constructor(private afAuth: AngularFireAuth) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.signupForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      name: new FormControl(null, [Validators.required]),
      username: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    });

  }

  onSubmit(): void {
    if (this.signupForm.valid) {
      console.log(this.signupForm.value);

      const email = this.signupForm.controls.email.value;
      const password = this.signupForm.controls.password.value;

      this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((Credentials) => {
        console.log(Credentials);
      })
      .catch((error) => {
        console.log(error);
      });
    } else {
      console.log('error');
    }
  }

}
