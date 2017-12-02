import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `      
  <nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">Auth0 - Angular</a>

      <button
        class="btn btn-primary btn-margin"
        routerLink="/">
          Home
      </button>

      <button
        class="btn btn-primary btn-margin"
        *ngIf="!auth.isAuthenticated()"
        (click)="auth.login()">
          Log In
      </button>

      <button
        class="btn btn-primary btn-margin"
        *ngIf="auth.isAuthenticated()"
        (click)="auth.logout()">
          Log Out
      </button>

    </div>
  </div>
</nav>
  <div class="container">
    <router-outlet></router-outlet>
  </div>
  `,
  styles: [`.container { padding-top: 60px; }`]
})
export class AppComponent { }
