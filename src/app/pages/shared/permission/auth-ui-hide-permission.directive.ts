import {Directive, ElementRef, Input} from '@angular/core';
import {AuthGuardService} from '../../../service/auth/auth-guard.service';

@Directive({
  selector: '[hasPermissionHide]'
})
export class AuthUiHidePermissionDirective {

  constructor(private elementRef: ElementRef,
              private authGuard: AuthGuardService) {
  }

  @Input('hasPermissionHide') set authorize(hasPermissionHide: string) {

    let permissionArray: Array<string> = new Array<string>();
    hasPermissionHide.split(',').forEach(element => {
      permissionArray.push(element.trim());
    });

    const authorize: boolean = this.authGuard.hasRoles(permissionArray);

    if (!authorize) {
      switch (this.elementRef.nativeElement.tagName) {
        case 'BUTTON':
          this.authorizeButtonElement();
          break;
        case 'DIV':
          this.authorizeDivisionElement();
          break;
        case 'LI':
          this.authorizeListElement();
          break;
        case 'UL':
          this.authorizeULElement();
          break;
        case 'A':
          this.authorizeAElement();
          break;
        default:
          console.log('Default Executed: Element Tag Name is Not Defined!');
      }
    }
  }

  public authorizeButtonElement() {
    this.elementRef.nativeElement.style.display = 'none';
  }

  public authorizeDivisionElement() {
    this.elementRef.nativeElement.style.display = 'none';
  }

  public authorizeListElement() {
    this.elementRef.nativeElement.style.display = 'none';
  }

  public authorizeULElement() {
    this.elementRef.nativeElement.style.display = 'none';
  }

  public authorizeAElement() {
    this.elementRef.nativeElement.style.display = 'none';
  }
}
