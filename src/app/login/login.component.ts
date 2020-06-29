import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent { 

    onClick():void {
      const val = this.loginForm.value;
      this.httpClient.get("assets/data/data.json").subscribe(data =>{
      
      if (data[0]["email"] == val.email && data[0]["password"] == val.password)
      {
          console.log("true");
          this.router.navigate(['./profile']);
      }
      else 
        {
          this.router.navigate(['']);
        }
    })
      // const val = this.loginForm.value;      
      // if (val.email == 'asd@asd.com' && val.password == 'asdasd') {
      //   console.log("true");
      //   this.router.navigate(['./profile']);
      // }
      //   else{
      //     console.log("false");                  
      //   }
    }

    loginForm= new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required,Validators.minLength(6)]),
      checkbox: new FormControl('',[Validators.required])
    })

    
  
constructor(private route:ActivatedRoute,private router:Router, private httpClient: HttpClient) { }

 get email(){return this.loginForm.get('email')}
 get password(){return this.loginForm.get('password')}


}
