import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {ActivityComponent} from './activity/activity.component';
import { LoginComponent } from './login/login.component';
import { FavoritesComponent } from './favorites/favorites.component';

const routes: Routes = [
 { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'activity', component: ActivityComponent },
  { path: 'login', component: LoginComponent },
  { path: 'favorites', component: FavoritesComponent }
]

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes)],
  exports : [RouterModule]
  
})
export class AppRoutingModule { }
