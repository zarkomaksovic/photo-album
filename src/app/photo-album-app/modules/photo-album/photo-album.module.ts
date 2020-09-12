import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoAlbumRoutingModule } from './photo-album-routing.module';
import { PhotoAlbumsListComponent } from './components/photo-albums-list/photo-albums-list.component';
import { PhotoCardComponent } from './components/photo-card/photo-card.component';

@NgModule({
  declarations: [PhotoAlbumsListComponent, PhotoCardComponent],
  imports: [
    CommonModule,
    PhotoAlbumRoutingModule
  ]
})
export class PhotoAlbumModule { }
