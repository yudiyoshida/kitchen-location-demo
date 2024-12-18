import { HttpInterceptorFn } from '@angular/common/http';

export const bearerTokenInterceptor: HttpInterceptorFn = (req, next) => {
  req = req.clone({
    setHeaders: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'ngrok-skip-browser-warning': '123',
    },
  });

  return next(req);
};
