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
    sessionStorage.removeItem(Constant.USER_NAME);
    sessionStorage.removeItem(Constant.TOKEN);
    sessionStorage.removeItem(Constant.AUTHORITIES);
    // sessionStorage.removeItem(Constant.CART);
    sessionStorage.removeItem(Constant.ALERT_COUNT);
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
    let authoritiesArray: Array<string> = sessionStorage.getItem(Constant.AUTHORITIES)
      .split(',');
    authoritiesArray.forEach((element, index) => {
      authorities.set(element, index);
    });
    return authorities;
  }

  logout() {
    this.authenticationControllerService.logoutUsingPOST({userName: sessionStorage.getItem(Constant.USER_NAME)}).subscribe(response => {
      console.log('Logout response :', response);
      sessionStorage.removeItem(Constant.USER_NAME);
      sessionStorage.removeItem(Constant.TOKEN);
      sessionStorage.removeItem(Constant.AUTHORITIES);
      sessionStorage.removeItem(Constant.CART);
      sessionStorage.removeItem(Constant.ALERT_COUNT);
    });
  }

  isLoggedIn(): boolean {
    return sessionStorage.getItem(Constant.TOKEN) ? true : false;
  }

  getUserName(): string {
    return sessionStorage.getItem(Constant.USER_NAME);
  }

  getToken(): string {
    return sessionStorage.getItem(Constant.TOKEN);
  }

  private saveTokenData(response) {
    let decodedToken = helper.decodeToken(response.token);

    console.log('Response : ', response);
    console.log('Response Uname : ', response.userName);
    console.log('Response Subject : ', decodedToken.sub);
    console.log('Response Decoded Token : ', decodedToken);
    console.log('Response Decoded Token Authorities : ', decodedToken.authorities);

    sessionStorage.setItem(Constant.TOKEN, response.token);
    sessionStorage.setItem(Constant.USER_NAME, response.userName);
    sessionStorage.setItem(Constant.AUTHORITIES, decodedToken.authorities);

    this.router.navigate(['/pages/shop']);
  }
}
