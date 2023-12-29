import { Component, Input } from '@angular/core';
import { BreadcrumbItem } from '../../models/breadcrumb.model';

@Component({
  selector: 'lib-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {
  @Input() breadcrumbItems: BreadcrumbItem[];
}
