import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';

@Component({
    selector: 'app-component-preview',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <div class="overflow-hidden rounded-lg border border-[var(--kui-border)]">
            <!-- Title bar with traffic lights -->
            <div
                class="flex items-center justify-between border-b border-[oklch(0.25_0.006_285.89)] px-4 py-2.5 bg-[oklch(0.19_0.005_285.85)]"
            >
                <div class="flex items-center gap-3">
                    <div class="flex items-center gap-1.5">
                        <span class="size-3 rounded-full bg-[#ff5f57]"></span>
                        <span class="size-3 rounded-full bg-[#febc2e]"></span>
                        <span class="size-3 rounded-full bg-[#28c840]"></span>
                    </div>
                </div>
                <div class="flex gap-1">
                    <button
                        class="rounded-md px-3 py-1 text-xs font-medium transition-colors"
                        [class]="
                            activeTab() === 'preview'
                                ? 'bg-[oklch(0.25_0.006_285.89)] text-[oklch(0.93_0_0)]'
                                : 'text-[oklch(0.55_0.01_285.9)] hover:text-[oklch(0.8_0_0)]'
                        "
                        (click)="activeTab.set('preview')"
                    >
                        Preview
                    </button>
                    <button
                        class="rounded-md px-3 py-1 text-xs font-medium transition-colors"
                        [class]="
                            activeTab() === 'code'
                                ? 'bg-[oklch(0.25_0.006_285.89)] text-[oklch(0.93_0_0)]'
                                : 'text-[oklch(0.55_0.01_285.9)] hover:text-[oklch(0.8_0_0)]'
                        "
                        (click)="activeTab.set('code')"
                    >
                        Code
                    </button>
                </div>
            </div>

            <!-- Content -->
            @if (activeTab() === 'preview') {
                <div
                    class="flex min-h-[140px] items-center justify-center gap-4 p-8 bg-[oklch(0.16_0.004_285.82)]"
                >
                    <ng-content />
                </div>
            } @else {
                <pre
                    class="overflow-x-auto p-4 text-sm leading-relaxed bg-[oklch(0.16_0.004_285.82)] text-[oklch(0.93_0_0)]"
                ><code>{{ code() }}</code></pre>
            }
        </div>
    `,
})
export class ComponentPreview {
    readonly code = input.required<string>();
    readonly language = input('html');

    protected readonly activeTab = signal<'preview' | 'code'>('preview');
}
