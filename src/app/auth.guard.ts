import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Auth } from 'aws-amplify';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): Promise < boolean > {
    return new Promise((resolve) => {
      Auth.currentAuthenticatedUser({
          bypassCache: false
        })
        .then((user) => {
          if(user){
            resolve(true);
          }
        })
        .catch(() => {
          this.router.navigate(['/login']);
          resolve(false);
        });
    });
  }
}