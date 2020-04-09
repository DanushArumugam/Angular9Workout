import { Directive, ElementRef, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appHighlightExample]'
})
export class HighlightExampleDirective {

  @Input()
  highlightColor :string;

  @Input() appHighlightExample: string;

    

  constructor(private el : ElementRef) {
//el.nativeElement.style.backgroundColor='yellow';

   }
   @HostListener('mouseenter') onMouseEnter(){
     this.highlightMethod(this.highlightColor || 'red');
   }
@HostListener('mouseleave') onMouseLeave(){
  this.highlightMethod(null);
}

  highlightMethod(color: string) {
   this.el.nativeElement.style.backgroundColor=color;
  }

}
