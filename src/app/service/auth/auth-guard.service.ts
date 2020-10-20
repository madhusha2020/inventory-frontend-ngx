import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {TokenService} from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private router: Router,
    private tokenService: TokenService
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isLoggedIn: boolean = this.tokenService.isLoggedIn();
    let isAuthorized = false;

    if (isLoggedIn) {
      const rotedRoles: Array<string> = route.data['roles'];
      if (rotedRoles && rotedRoles.length > 0) {
        isAuthorized = this.hasRoles(rotedRoles);
      }
      console.debug(isAuthorized ? 'Authorized Route' : 'Unauthorized Route');
      if (!isAuthorized) {
        this.router.navigate(['/pages/401']);
      }
      return isAuthorized;
    } else {
      this.tokenService.logout();
      this.router.navigate(['/auth/login']);
      return false;
    }
  }

  public hasRoles(roles: Array<string>): boolean {
    let authorized = false;
    try {
      roles.forEach(element => {
        if (this.hasRole(element)) {
          authorized = true;
        }
      });
      return authorized;
    } catch (e) {
      console.warn('hasRole(s) function Error');
    }
  }

  public hasRole(role: string): boolean {
    try {
      return (this.tokenService.getAuthorities().has(role));
    } catch (e) {
      console.warn('hasRole function Error');
    }
  }
}
