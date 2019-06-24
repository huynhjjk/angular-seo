import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Pages */

import { HomeComponent } from './pages/home/home.component';
import { HomeResolve } from './pages/home/home.resolve';

import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'contact', component: ContactComponent }
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
