import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { CodeBlock } from '../code-block/code-block';

@Component({
    selector: 'app-component-preview',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CodeBlock],
    template: `
        <div class="rounded-lg border border-[var(--kui-border)]">
            <!-- Tabs -->
            <div class="flex border-b border-[var(--kui-border)]">
                <button
                    class="px-4 py-2 text-sm font-medium transition-colors"
                    [class]="
                        activeTab() === 'preview'
                            ? 'border-b-2 border-[var(--kui-primary)] text-[var(--kui-foreground)]'
                            : 'text-[var(--kui-muted-foreground)] hover:text-[var(--kui-foreground)]'
                    "
                    (click)="activeTab.set('preview')"
                >
                    Preview
                </button>
                <button
                    class="px-4 py-2 text-sm font-medium transition-colors"
                    [class]="
                        activeTab() === 'code'
                            ? 'border-b-2 border-[var(--kui-primary)] text-[var(--kui-foreground)]'
                            : 'text-[var(--kui-muted-foreground)] hover:text-[var(--kui-foreground)]'
                    "
                    (click)="activeTab.set('code')"
                >
                    Code
                </button>
            </div>

            <!-- Content -->
            @if (activeTab() === 'preview') {
                <div class="flex min-h-[120px] items-center justify-center gap-4 p-8">
                    <ng-content />
                </div>
            } @else {
                <app-code-block [code]="code()" [language]="language()" />
            }
        </div>
    `,
})
export class ComponentPreview {
    readonly code = input.required<string>();
    readonly language = input('html');

    protected readonly activeTab = signal<'preview' | 'code'>('preview');
}
