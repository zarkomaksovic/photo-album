import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from './photo-album-app/guards/authentication.guard';

const routes: Routes = [
  { path: 'login', loadChildren: './photo-album-app/modules/login/login.module#LoginModule' },
  {
    path: 'home',
    loadChildren: './photo-album-app/modules/photo-album/photo-album.module#PhotoAlbumModule',
    canActivate: [AuthenticationGuard]
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    AuthenticationGuard
  ]
})
export class AppRoutingModule { }
