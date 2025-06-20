import {
  Directive,
  ElementRef,
  inject,
  Input,
  OnChanges,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appToDoListColor]',
  standalone: true,
})
export class ToDoListColorDirective implements OnChanges {
  @Input() appToDoListColor = false;
  private el = inject(ElementRef);
  private renderer = inject(Renderer2);

  ngOnChanges(): void {
    const color = this.appToDoListColor ? 'green' : 'red';
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }
}
