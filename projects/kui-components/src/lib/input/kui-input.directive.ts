import { Directive, input } from '@angular/core';
import { NgpInput } from 'ng-primitives/input';

@Directive({
    selector: 'input[kuiInput], textarea[kuiInput]',
    hostDirectives: [{ directive: NgpInput, inputs: ['disabled'] }],
    host: {
        class: 'kui-input',
        '[attr.data-size]': 'size()',
    },
})
export class KuiInput {
    readonly size = input<'default' | 'sm' | 'lg'>('default');
}
