import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    // Login Object
    loginData = {
      username: '',
      password: '',
    };

    constructor(private snackBar: MatSnackBar, private router: Router, private loginService: LoginService) { }

    ngOnInit(): void {

    }

    // Login form Submit method
    loginFormSubmit(){
    }
}
