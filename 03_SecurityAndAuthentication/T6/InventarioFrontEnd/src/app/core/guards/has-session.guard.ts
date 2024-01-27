import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

export class HasSessionGuard implements CanActivate{
  constructor(private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable <boolean | UrlTree> | Promise<boolean |UrlTree> |boolean | UrlTree {
      console.log(route);
      console.log(state);
      console.log(environment.hasSession);
      if (!environment.hasSession) {
        this.router.navigate(['/sign-in']);
      }
      return environment.hasSession;
  }
}