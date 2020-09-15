import { PhotoAlbumApiService } from './../../services/photo-album-api.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoAlbumRoutingModule } from './photo-album-routing.module';
import { PhotoAlbumsListComponent } from './components/photo-albums-list/photo-albums-list.component';
import { PhotoCardComponent } from './components/photo-card/photo-card.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [PhotoAlbumsListComponent, PhotoCardComponent],
  imports: [
    CommonModule,
    PhotoAlbumRoutingModule,
    HttpClientModule
  ],
  providers: [PhotoAlbumApiService]
})
export class PhotoAlbumModule { }
