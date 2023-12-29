import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { MenuComponent } from './menu/menu.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { DirectivesModule } from '../directives/directives.module';
import { RouterModule } from '@angular/router';
import { TabGroupComponent } from './tab-group/tab-group.component';
import { PrimaryButtonComponent } from './primary-button/primary-button.component';
import { CardComponent } from './card/card.component';
import { TransparentButtonComponent } from './transparent-button/transparent-button.component';
import { InputComponent } from './input/input.component';
import { ModalComponent } from './modal/modal.component';
import { NgxMaskDirective } from 'ngx-mask';
import { SwitchComponent } from './switch/switch.component';

const components = [
  MenuItemComponent,
  MenuComponent,
  BreadcrumbComponent,
  TabGroupComponent,
  PrimaryButtonComponent,
  CardComponent,
  TransparentButtonComponent,
  InputComponent,
  ModalComponent,
  SwitchComponent,
];

@NgModule({
  imports: [
    CommonModule,
    TranslocoModule,
    ReactiveFormsModule,
    DirectivesModule,
    RouterModule,
    NgxMaskDirective,
  ],
  declarations: components,
  exports: components,
})

export class ComponentsModule {}
