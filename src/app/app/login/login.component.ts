import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public LoginForm!: FormGroup;
  constructor(private build: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.LoginForm = this.build.group({
      email: [''],
      Password: [''],
    })
  }
  login() {
    this.http.get<any>('')
      .subscribe(res => {
        const user = res.find((a: any) => {
          return a.email === this.LoginForm.value.email && a.Password === this.LoginForm.value.Password
        })
        if (user) {
          alert("Login Successful!")
          this.router.navigate(['UserDashboard'])
        }
        else {
          alert("User not Found! May be you need to register First")
        }

      }, err => {
        alert("Something went Wrong!")
      })

  }

}
