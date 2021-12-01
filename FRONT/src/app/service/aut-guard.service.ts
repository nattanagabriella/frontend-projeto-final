import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { APIService } from './api.service';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class AuthGuardService implements CanActivate {
  
  constructor(private authService: APIService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.authService.authorization) {
      this.router.navigate(['/']);
      console.log("Erro");
      return false;
    }

    console.log("Ok");
    return true;
  }
}