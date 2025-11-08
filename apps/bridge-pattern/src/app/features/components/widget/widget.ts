import { Component, contentChild, OnInit } from '@angular/core';
import { WIDGET } from '../../../core/tokens/widget';

@Component({
  selector: 'app-widget',
  imports: [],
  templateUrl: './widget.html',
  styleUrl: './widget.css'
})
export class Widget implements OnInit {

  widget = contentChild(WIDGET);

  ngOnInit() {
    this.widget?.()?.load();
  }

  refresh() {
    this.widget?.()?.refresh();
  }
}
