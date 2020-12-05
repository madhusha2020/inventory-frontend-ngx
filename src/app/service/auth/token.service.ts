import {Injectable} from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import {AuthenticationControllerService, CustomerUser, User} from '../rest';
import {Router} from '@angular/router';
import {Constant} from './constant';

const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private authenticationControllerService: AuthenticationControllerService, private router: Router) {
  }

  login(user: User) {
    localStorage.removeItem(Constant.USER_NAME);
    localStorage.removeItem(Constant.TOKEN);
    localStorage.removeItem(Constant.AUTHORITIES);
    localStorage.removeItem(Constant.CART);
    localStorage.removeItem(Constant.ALERT_COUNT);
    this.authenticationControllerService.loginUsingPOST(user).subscribe(response => {
        if (response && response.token) {
          this.saveTokenData(response);
        }
      }
    );
  }

  register(customerUser: CustomerUser) {
    this.authenticationControllerService.registerUserUsingPOST(customerUser).subscribe(response => {
        if (response && response.user.token) {
          this.saveTokenData(response.user);
        }
      }
    );
  }

  getAuthorities(): Map<string, number> {
    let authorities: Map<string, number> = new Map<string, number>();
    let authoritiesArray: Array<string> = localStorage.getItem(Constant.AUTHORITIES)
      .split(',');
    authoritiesArray.forEach((element, index) => {
      authorities.set(element, index);
    });
    return authorities;
  }

  logout() {
    this.authenticationControllerService.logoutUsingPOST({userName: localStorage.getItem(Constant.USER_NAME)}).subscribe(response => {
      console.log('Logout response :', response);
      localStorage.removeItem(Constant.USER_NAME);
      localStorage.removeItem(Constant.TOKEN);
      localStorage.removeItem(Constant.AUTHORITIES);
      localStorage.removeItem(Constant.CART);
      localStorage.removeItem(Constant.ALERT_COUNT);
    });
  }

  isLoggedIn(): boolean {
    return localStorage.getItem(Constant.TOKEN) ? true : false;
  }

  getUserName(): string {
    return localStorage.getItem(Constant.USER_NAME);
  }

  getToken(): string {
    return localStorage.getItem(Constant.TOKEN);
  }

  private saveTokenData(response) {
    let decodedToken = helper.decodeToken(response.token);

    console.log('Response : ', response);
    console.log('Response Uname : ', response.userName);
    console.log('Response Subject : ', decodedToken.sub);
    console.log('Response Decoded Token : ', decodedToken);
    console.log('Response Decoded Token Authorities : ', decodedToken.authorities);

    localStorage.setItem(Constant.TOKEN, response.token);
    localStorage.setItem(Constant.USER_NAME, response.userName);
    localStorage.setItem(Constant.AUTHORITIES, decodedToken.authorities);

    this.router.navigate(['/pages/dashboard']);
  }
}
