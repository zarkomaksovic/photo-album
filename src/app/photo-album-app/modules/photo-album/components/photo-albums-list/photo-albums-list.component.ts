import { Component, OnInit } from '@angular/core';
import { PhotoAlbumApiService } from 'src/app/photo-album-app/services/photo-album-api.service';
import { PhotoAlbum } from 'src/app/photo-album-app/models/photoAlbum.model';
import { LoginService } from 'src/app/photo-album-app/services/login.service';
import { User } from 'src/app/photo-album-app/models/user.model';

@Component({
  selector: 'app-photo-albums-list',
  templateUrl: './photo-albums-list.component.html',
  styleUrls: ['./photo-albums-list.component.scss']
})
export class PhotoAlbumsListComponent implements OnInit {
  photoCards = [];
  albums: PhotoAlbum[];
  gridLayout = true;
  user: User;
  constructor(
    private albumService: PhotoAlbumApiService,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.getAlbums();
    this.user = this.loginService.currentUserValue;
  }

  getAlbums() {
    this.albumService.getAllAlbumsByUser().subscribe(albums => {
      this.albums = albums;
    });
  }
  changeLayout() {
    this.gridLayout = !this.gridLayout;
  }
}
