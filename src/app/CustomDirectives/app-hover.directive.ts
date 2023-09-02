import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class AppHoverDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { 

  }

  @HostBinding('style.backgroundColor') backgroundColor: string = 'gray';
  @HostBinding('style.border') border: string = 'none';
  @HostBinding('style.color') textColor: string = 'white';

  @HostListener('mouseenter') OnMouseEnter() {
    this.backgroundColor = 'white';
    this.border = '3px solid grey';
    this.textColor = 'grey';
  }

  @HostListener('mouseout') OnMouseOut() {
    this.backgroundColor = 'grey';
    this.border = 'none';
    this.textColor = 'white';
  }
}
