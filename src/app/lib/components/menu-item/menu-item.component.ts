import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent {
  @Input() icon: string;
  @Input() label: string;
  @Input() link: string;
  @Input() id: number;
  @Input() activated: boolean;
  @Output() setActiveId = new EventEmitter();

  constructor(private router: Router){}

  redirect() {
    this.setActiveId.emit(this.id);
    this.router.navigate([this.link]);
  }
}
