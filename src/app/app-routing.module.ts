import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './components/auth/auth.guard';
import { AccessDeniedComponent } from './components/access-denied/access-denied.component';
import { AdminComponent } from './components/admin/admin.component';
import { MovieComponent } from './components/movie/movie.component';
import { ConfigurationComponent } from './components/configuration/configuration.component';


const routes: Routes = [
  { path: '', redirectTo: 'movie', pathMatch: 'full'},
  {
    path: 'access-denied',
    component: AccessDeniedComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    // The user need to have this roles to access
    data: { roles: ['ROLE_APP'] },
  },
  {
    path: 'movie',
    component: MovieComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_APP'] },
  },
  {
    path: 'configuration',
    component: ConfigurationComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_APP'] },
  },
  { path: '**', component: MovieComponent }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
