import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";

import {AuthService} from "./auth.service";

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);

  if (authService.token)
    return true;

  inject(Router)?.navigate(['auth', 'login'], { queryParams: { returnUrl: state?.url }});

  return false;
};
