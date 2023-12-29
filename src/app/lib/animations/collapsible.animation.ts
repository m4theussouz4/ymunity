import { animate, state, style, transition, trigger } from "@angular/animations";

export const collapsible = trigger('collapsible', [
    state(
        'expanded',
        style({ height: '*' })
    ),
    state(
        'collapsed',
        style({ height: '0' })
    ),
    transition('expanded => collapsed', animate('200ms ease-in')),
    transition('collapsed => expanded', animate('200ms ease-out')),
])