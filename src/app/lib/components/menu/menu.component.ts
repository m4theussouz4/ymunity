import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MenuObject } from '../../models/menu.model';
import { collapsible } from '../../animations/collapsible.animation';

@Component({
  selector: 'lib-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [collapsible],
})
export class MenuComponent {
  
  get menuList(): Array<MenuObject> {
    return this._menuList
  };

  @Input()
  set menuList(value: Array<MenuObject>) {
    this._menuList = value;
    this.activeMenuIndex = value?.findIndex(item => this.router.url.includes(item.link!)) || 0;
  };

  @Output() menuSelected = new EventEmitter();

  public activeMenuIndex = 0;
  public state: 'expanded' | 'collapsed' = 'expanded';

  private _menuList: Array<MenuObject>;

  constructor(private router: Router) { }

  selectMenu(id: number) {
    this.activeMenuIndex = id;
    this.menuSelected.emit(id);
  }

  toggleState() {
    this.state = this.state === 'collapsed' ? 'expanded' : 'collapsed';
  }
}
