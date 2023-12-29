import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { take } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  styles: [
    `
      :host {
        min-height: 100%;
      }
    `,
  ],
})

export class AppComponent {
  constructor(private translocoService: TranslocoService) {
    // todo: fix transloco
    // this.translocoService.load('pt-BR').pipe(take(1)).subscribe(() => {
    //   this.translocoService.setActiveLang('pt-BR');
    // });
  }
}