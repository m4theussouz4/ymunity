import { Component, Input } from '@angular/core';
import { Tab } from '../../models/tabs.model';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.scss']
})
export class TabGroupComponent {

  get tabList(): Tab[] {
    return this._tabList
  };

  @Input()
  set tabList(value: Tab[]) {
    this._tabList = value;
    this.activatedId = value?.findIndex(tab => this.router.url.includes(tab.link))
  }

  public activatedId = 0;

  private _tabList: Tab[];

  constructor(private router: Router) { }

  changeTab(tab: Tab) {
    this.activatedId = tab.id;
    this.router.navigate([tab.link]);
  }
}
