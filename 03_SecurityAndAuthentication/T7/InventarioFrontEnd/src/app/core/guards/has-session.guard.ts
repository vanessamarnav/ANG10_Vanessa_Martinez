import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { inject } from '@angular/core';

export const HasSessionGuard: CanActivateFn = (route, state) => {
  const cookie = inject(CookieService);  
  const router = inject(Router);
  const session = cookie.get('session');
  let dataUser;
  if (!!session) {
    dataUser = JSON.parse(atob(session != undefined ? session : ''))
  }
  if (!dataUser?.hasSession) {
    router.navigateByUrl('/sign-in');
  }
  return !!dataUser.hasSession;
};