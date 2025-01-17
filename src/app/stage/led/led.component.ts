import { Component, ChangeDetectionStrategy, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'jsr-led',
  template: '',
  styleUrls: ['./led.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LedComponent {
  @Input()
  @HostBinding('class.active')
  active = false;
}
