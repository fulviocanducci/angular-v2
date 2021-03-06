import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ZipcodeComponent } from './zipcode/zipcode.component';
import { AddresscodeComponent } from './addresscode/addresscode.component';
import { GithubuserComponent } from './githubuser/githubuser.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'zipcode', component: ZipcodeComponent },
  { path: 'addresscode', component: AddresscodeComponent },
  { path: 'githubuser', component: GithubuserComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
