import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  constructor(private element : ElementRef, private renderer :  Renderer2) { }

  @Input() defaultColor: string = 'transparent'
  @Input() highlightColor: string = 'pink'

    @HostBinding('style.backgroundColor') background: string = this.defaultColor;
  @HostBinding('style.border') border: string = 'none'

  ngOnInit(): void {
    this.background = this.defaultColor
  }

  @HostListener('mouseenter') mouseenter(){
    this.background = this.highlightColor
  }

  @HostListener('mouseleave') mouseleave(){
    this.background = this.defaultColor
  }
}
