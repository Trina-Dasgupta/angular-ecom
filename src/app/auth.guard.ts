import { CanActivateFn } from '@angular/router';
import { SellerService } from './services/seller.service';

import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const sellerService: SellerService = inject(SellerService);
  if (localStorage.getItem('seller')) {
    return true;
  }
  return sellerService.isSellerLoggedIn;
};
// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
// import { Observable } from 'rxjs';
// import { SellerService } from './services/seller.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate {
//   constructor(private sellerService:SellerService){}
//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//       if(localStorage.getItem('seller')){
//        return true;
//       }
//       return this.sellerService.isSellerLoggedIn;
//   }

// }
