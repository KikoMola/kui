import { Directive } from '@angular/core';
import { NgpDescription, NgpError, NgpFormField, NgpLabel } from 'ng-primitives/form-field';

@Directive({
    selector: '[kuiFormField]',
    hostDirectives: [NgpFormField],
    host: {
        class: 'kui-form-field',
    },
})
export class KuiFormField {}

@Directive({
    selector: '[kuiLabel]',
    hostDirectives: [NgpLabel],
    host: {
        class: 'kui-label',
    },
})
export class KuiLabel {}

@Directive({
    selector: '[kuiDescription]',
    hostDirectives: [NgpDescription],
    host: {
        class: 'kui-description',
    },
})
export class KuiDescription {}

@Directive({
    selector: '[kuiError]',
    hostDirectives: [{ directive: NgpError, inputs: ['ngpErrorValidator: validator'] }],
    host: {
        class: 'kui-error',
    },
})
export class KuiError {}
