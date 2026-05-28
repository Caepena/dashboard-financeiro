import {
  AfterContentInit,
  afterNextRender,
  afterRender,
  Component,
  contentChild,
  ContentChild,
  ElementRef,
  inject,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: { class: 'control', '(click)': 'onClick()' },
})
export class ControlComponent implements AfterContentInit {
  @Input({ required: true })
  label!: string;

  // @ContentChild('input')
  // private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;

  constructor() {
    afterRender(() => {
      console.log('afterRender')
    })

    afterNextRender(() => {
      console.log('afterNextRender')
    })
  }

  private control =
    contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  private el = inject(ElementRef);

  ngAfterContentInit() {}

  onClick() {
    console.log('Control clicked');
    console.log('Element:', this.el);
    console.log('Control:', this.control());
  }
}
