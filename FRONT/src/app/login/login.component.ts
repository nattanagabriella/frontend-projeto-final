import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/service/api.service';
import { Router } from '@angular/router';
import { Form, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loginError: boolean = false;

  constructor(
    private api: APIService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      login: new FormControl(null),
      senha: new FormControl(null),
    });
  }

  onSubmit(): void {
    this.login();
  }

  login(): void {
    this.api
      .getAuthorizationToken(
        this.loginForm.value.login,
        this.loginForm.value.senha
      )
      .subscribe((token) => {
        if (token) {
          this.api.setAuth(token);
          this.router.navigateByUrl('/kanban-board');
          this.loginError = false;
        } else {
          this.loginError = true;
          this.loginForm.reset();
          this.api.clearAuth();
        }
      });
  }

  logout(): void {
    this.router.navigateByUrl('/login');
    this.api.clearAuth();
  }
}
