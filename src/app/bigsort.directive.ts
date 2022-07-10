import { Directive, ElementRef, EventEmitter, HostBinding, HostListener, Output, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBigsort]',
})
export class BigsortDirective {
  @Output() someEvent: EventEmitter<string> = new EventEmitter();
  @HostBinding('style.backgroundColor') bakcgroundColor: string | undefined;
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') m(eventData: Event) {
    let omer = this.elRef.nativeElement;
    // this.renderer.setProperty(omer, "innerHTML" , `<em>asdf</em)`)
    const div = this.renderer.createElement('em');
    const text = this.renderer.createText('Inserted at bottom');
    this.renderer.appendChild(div, text);
    this.renderer.appendChild(omer, div);
    this.someEvent.emit('omer');
    this.bakcgroundColor = 'red';
  }
}
