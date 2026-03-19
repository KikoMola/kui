import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

@Component({
    selector: 'kui-character-count',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'kui-character-count',
        '[class.kui-character-count--warning]': 'isWarning()',
        '[class.kui-character-count--exceeded]': 'isExceeded()',
    },
    template: `{{ current() }}/{{ max() }}`,
})
export class KuiCharacterCount {
    readonly current = input.required<number>();
    readonly max = input.required<number>();

    protected readonly isWarning = computed(() => {
        const ratio = this.current() / this.max();
        return ratio >= 0.8 && ratio < 1;
    });

    protected readonly isExceeded = computed(() => this.current() >= this.max());
}
