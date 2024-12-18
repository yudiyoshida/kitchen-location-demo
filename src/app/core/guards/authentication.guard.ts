import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StorageService } from '../authentication/services/storage.service';

export const authenticationGuard: CanActivateFn = () => {
  const storageService = inject(StorageService);
  const router = inject(Router);
  const toastr = inject(ToastrService);

  const token = storageService.getToken();
  if (!token) {
    toastr.info('Sessão expirada. Faça login novamente.');
    router.navigate(['/']);
    return false;
  }

  return true;
};
