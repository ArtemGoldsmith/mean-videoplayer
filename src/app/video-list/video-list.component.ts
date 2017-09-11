import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Video } from '../video';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
})
export class VideoListComponent implements OnInit {

  @Input() videos: Video[];
  @Output() video = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSelect(video) {
    this.video.emit(video);
  }

}
