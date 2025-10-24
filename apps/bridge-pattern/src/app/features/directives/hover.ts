import { Directive, HostListener, output } from '@angular/core';

@Directive({
  selector: '[appHover]',
})
export class HoverDirective {
  hovered = output<boolean>({ alias: 'appHover' });

  @HostListener('mouseenter')
  onEnter() {
    this.hovered.emit(true);
  }

  @HostListener('mouseleave')
  onLeave() {
    this.hovered.emit(false);
  }
}
