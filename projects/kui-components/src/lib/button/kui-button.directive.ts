import { Directive, input } from '@angular/core';
import { NgpButton } from 'ng-primitives/button';

export type KuiButtonVariant = 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
export type KuiButtonSize = 'default' | 'sm' | 'lg' | 'icon';

@Directive({
    selector: '[kuiButton]',
    hostDirectives: [{ directive: NgpButton, inputs: ['disabled'] }],
    host: {
        class: 'kui-button',
        '[attr.data-variant]': 'variant()',
        '[attr.data-size]': 'size()',
    },
})
export class KuiButton {
    readonly variant = input<KuiButtonVariant>('default');
    readonly size = input<KuiButtonSize>('default');
}
