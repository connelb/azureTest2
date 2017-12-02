import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CallbackComponent } from './callback/callback.component';
import { HomeComponent } from './home/home.component';

/* const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/contacts'
  },
  {
    path: 'contacts',
    loadChildren: 'app/contacts/contacts.module#ContactsModule'
  }
]; */

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'callback', component: CallbackComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
