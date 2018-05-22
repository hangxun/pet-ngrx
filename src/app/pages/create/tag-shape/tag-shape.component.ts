import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tag-shape',
  templateUrl: './tag-shape.component.html',
  styleUrls: ['./tag-shape.component.css']
})
export class TagShapeComponent implements OnInit {

  tagShape: string;

  @Output() slectShapeEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  selectShape (shape: string) {
    this.slectShapeEvent.emit(shape);
  }

}
