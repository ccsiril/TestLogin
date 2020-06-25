import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

    loginForm= new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required,Validators.minLength(6)]),
      checkbox: new FormControl('',[Validators.required])
    })
  
 get email(){return this.loginForm.get('email')}
 get password(){return this.loginForm.get('password')}

 onLogin(){
   console.warn(this.loginForm.value);
   
 }

}
