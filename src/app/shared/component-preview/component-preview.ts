import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';

@Component({
    selector: 'app-component-preview',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <div class="overflow-hidden rounded-lg border border-[var(--kui-code-border)]">
            <!-- Title bar with traffic lights -->
            <div
                class="flex items-center justify-between border-b border-[var(--kui-code-border)] px-4 py-2.5 bg-[var(--kui-code-header)]"
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
                                ? 'bg-[var(--kui-code-border)] text-[var(--kui-code-foreground)]'
                                : 'text-[var(--kui-code-muted)] hover:text-[var(--kui-code-foreground)]'
                        "
                        (click)="activeTab.set('preview')"
                    >
                        Preview
                    </button>
                    <button
                        class="rounded-md px-3 py-1 text-xs font-medium transition-colors"
                        [class]="
                            activeTab() === 'code'
                                ? 'bg-[var(--kui-code-border)] text-[var(--kui-code-foreground)]'
                                : 'text-[var(--kui-code-muted)] hover:text-[var(--kui-code-foreground)]'
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
                    class="flex min-h-[140px] items-center justify-center gap-4 p-8 bg-[var(--kui-code-bg)]"
                >
                    <ng-content />
                </div>
            } @else {
                <pre
                    class="overflow-x-auto p-4 text-sm leading-relaxed bg-[var(--kui-code-bg)] text-[var(--kui-code-foreground)]"
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
