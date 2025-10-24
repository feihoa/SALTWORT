import { Component, ContentChild, OnInit } from '@angular/core';
import { IWidget } from '../../../core/models/widget';
import { WIDGET } from '../../../core/tokens/widget';

@Component({
  selector: 'app-widget',
  imports: [],
  templateUrl: './widget.html',
  styleUrl: './widget.css'
})
export class Widget implements OnInit {

  @ContentChild(WIDGET, { static: true }) widget?: IWidget;

  ngOnInit() {
    this.widget?.load();
  }

  refresh() {
    this.widget?.refresh();
  }
}
