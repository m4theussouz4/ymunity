import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContainerComponent } from './main-container/main-container.component';
import { TenanciesComponent } from './tenancies/tenancies.component';
import { UnitsComponent } from './tenancies/units/units.component';
import { GeralComponent } from './tenancies/geral/geral.component';

const routes: Routes = [
  {
    path: '',
    component: MainContainerComponent,
    children: [
      {
        path: 'tenancies',
        redirectTo: 'tenancies/geral',
        pathMatch: 'full',
      },
      {
        path: 'tenancies',
        component: TenanciesComponent,
        children: [
          {
            path: 'geral',
            component: GeralComponent,
          },
          {
            path: 'units',
            component: UnitsComponent,
          },
        ]
      },
      {
        path: '**',
        redirectTo: 'tenancies/units',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
