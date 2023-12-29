import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContainerComponent } from './main-container/main-container.component';
import { TranslocoModule } from '@ngneat/transloco';
import { FeaturesRoutingModule } from './features-routing.module';
import { ComponentsModule } from '../lib/components/components.module';
import { TenanciesComponent } from './tenancies/tenancies.component';
import { UnitsComponent } from './tenancies/units/units.component';
import { GeralComponent } from './tenancies/geral/geral.component';

@NgModule({
  declarations: [
    MainContainerComponent,
    TenanciesComponent,
    UnitsComponent,
    GeralComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    TranslocoModule,
    ComponentsModule,
    TranslocoModule
  ],
  providers: [MainContainerComponent],
})

export class FeaturesModule {}