import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[libDisableable]',
})
export class DisableableDirective {
  @HostBinding('class.disabled')
  @Input() public disabled: boolean;
}
