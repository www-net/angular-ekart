import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[setBackground]'
})
export class SetBackground implements OnInit {
    // private element: ElementRef;
    // private renderer: Renderer2;

    constructor(private element: ElementRef, private renderer: Renderer2) {
        // this.element = element;
        // this.renderer = renderer;
    }

    ngOnInit() {
        // this.element.nativeElement.style.backgroundColor = 'grey'
        // this.element.nativeElement.style.color = 'white'
        this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'grey');
        this.renderer.setStyle(this.element.nativeElement, 'color', 'white');
        // this.renderer.setAttribute(this.element.nativeElement, 'title', 'This is example title');
    }
} 