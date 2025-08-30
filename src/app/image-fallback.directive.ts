
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appImageFallback]'
})
export class ImageFallbackDirective {
  @Input() appImageFallback = 'assets/images/placeholder.svg';

  constructor(private elementRef: ElementRef<HTMLImageElement>) {}

  @HostListener('error')
  onError() {
    console.warn(`Image not found, falling back to placeholder: ${this.elementRef.nativeElement.src}`);
    this.elementRef.nativeElement.src = this.appImageFallback;
  }
}
