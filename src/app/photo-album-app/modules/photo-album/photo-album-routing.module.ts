import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotoAlbumsListComponent } from './components/photo-albums-list/photo-albums-list.component';

const routes: Routes = [
  {path: '', component: PhotoAlbumsListComponent},
  {path: 'albums/:id', component: PhotoAlbumsListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotoAlbumRoutingModule { }
