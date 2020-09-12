import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-albums-list',
  templateUrl: './photo-albums-list.component.html',
  styleUrls: ['./photo-albums-list.component.scss']
})
export class PhotoAlbumsListComponent implements OnInit {
  photoCards = [];
  constructor() { }

  ngOnInit() {
  }

}
