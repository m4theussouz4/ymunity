import { Component } from '@angular/core';
import { MenuObject } from 'src/app/lib/models/menu.model';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss'],
})
export class MainContainerComponent {
  menuItems: MenuObject[] = [
    {
      icon: 'fa-house',
      label: 'Home',
      link: '/home'
    },
    {
      icon: 'fa-user',
      label: 'Usuários',
      link: '/users'
    },
    {
      icon: 'fa-building',
      label: 'Tenancies',
      link: '/tenancies'
    },
    {
      icon: 'fa-notes-medical',
      label: 'Planos de saúde',
      link: '/health-insurance'
    },
    {
      label: 'Cadastros',
      subItems: [
        {
          icon: 'fa-notes-medical',
          label: 'Comorbidades',
          link: '/comorbidities'
        },
        {
          icon: 'fa-user',
          label: 'Condições do paciente',
          link: '/patient-conditions'
        },
        {
          icon: 'fa-building',
          label: 'Elegibilidade',
          link: '/eligibility'
        },
        {
          icon: 'fa-notes-medical',
          label: 'Especialidades',
          link: '/specialties'
        },

        {
          icon: 'fa-building',
          label: 'Patologias',
          link: '/pathologies'
        },
        {
          icon: 'fa-notes-medical',
          label: 'Medicamentos',
          link: '/medicines'
        },
      ]
    }
  ]

  constructor() {}

  logOut() {
    console.log('logOut');
  }
}
