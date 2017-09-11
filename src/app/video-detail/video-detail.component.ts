import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Video } from '../video';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css'],
})
export class VideoDetailComponent implements OnInit, OnChanges {

  @Input() video: Video[];
  @Output() updateVideoEvent = new EventEmitter();
  @Output() deleteVideoEvent = new EventEmitter();

  editTitle: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.editTitle = false;
  }

  onTitleClick() {
    this.editTitle = true;
  }

  updateVideo() {
    this.updateVideoEvent.emit(this.video);
  }

  deleteVideo() {
    this.deleteVideoEvent.emit(this.video);
  }

}