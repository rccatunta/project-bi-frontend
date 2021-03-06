import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService} from './../../services/user/user.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AdminGuardGuard implements CanActivate {

  constructor(
    private userService: UserService,
    private router: Router
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('Admin Guard');
    console.log(this.userService.getRol());
    console.log(this.userService.getToken);
    if (this.userService.getRol() === '2') {
      return true;
    } else {
      this.router.navigate(['./home']);
    }
  }
}
