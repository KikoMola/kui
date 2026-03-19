import { Directive, input } from '@angular/core';
import { NgpInput } from 'ng-primitives/input';

export type KuiInputState = 'default' | 'success' | 'warning' | 'error';

@Directive({
    selector: 'input[kuiInput], textarea[kuiInput]',
    hostDirectives: [{ directive: NgpInput, inputs: ['disabled'] }],
    host: {
        class: 'kui-input',
        '[attr.data-size]': 'size()',
        '[attr.data-state]': 'state()',
    },
})
export class KuiInput {
    readonly size = input<'default' | 'sm' | 'lg'>('default');
    readonly state = input<KuiInputState>('default');
}
