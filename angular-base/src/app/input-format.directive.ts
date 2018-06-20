import { Directive, HostListener, ElementRef, Input } from '@angular/core';

// HostListener

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  // @HostListener('focus') onFocus():void{
  //   console.log('on focus event');
  // }
  @Input('appInputFormat') format;

  constructor(private el: ElementRef) {
    // el got the access of the dom object

  }
  @HostListener('blur') onBlur():void{
    console.log('on blur event');
    let value:string = this.el.nativeElement.value;
    if(this.format == 'lowercase'){
      this.el.nativeElement.value = value.toLowerCase();
    }else{
      this.el.nativeElement.value = value.toUpperCase();
    }
  
  }
 

}
