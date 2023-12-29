import { Component } from '@angular/core';
import { BreadcrumbItem } from 'src/app/lib/models/breadcrumb.model';
import { Tab } from 'src/app/lib/models/tabs.model';

@Component({
  selector: 'app-tenancies',
  templateUrl: './tenancies.component.html',
  styleUrls: ['./tenancies.component.scss']
})
export class TenanciesComponent {
  public readonly breadcrumb: BreadcrumbItem[] = [
    {
      label: 'Tenancies',
      link: '/tenancies',
    },
    {
      label: 'Pulsus',
      link: '/pulsus',
    },
  ];

  public readonly tabs: Tab[] = [
    {
      id: 0,
      label: 'Geral',
      link: '/tenancies/geral'
    },
    {
      id: 1,
      label: 'Unidades',
      link: '/tenancies/units'
    },
    {
      id: 2,
      label: 'Usuários',
      link: '/tenancies/users'
    },
    {
      id: 3,
      label: 'Planos',
      link: '/tenancies/plans'
    },
    {
      id: 4,
      label: 'Patalogias',
      link: '/tenancies/pathologies'
    },
  ]
}
