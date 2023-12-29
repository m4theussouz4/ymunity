import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisableableDirective } from './disableable/disableable.directive';

const DIRECTIVES = [
    DisableableDirective
];

@NgModule({
  imports: [CommonModule],
  declarations: [...DIRECTIVES],
  exports: [...DIRECTIVES],
})
export class DirectivesModule {}
