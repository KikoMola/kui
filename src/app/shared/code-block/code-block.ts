import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';

@Component({
    selector: 'app-code-block',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <div class="relative rounded-lg border border-[var(--kui-border)] bg-[var(--kui-card)]">
            <div class="flex items-center justify-between border-b border-[var(--kui-border)] px-4 py-2">
                <span class="text-xs text-[var(--kui-muted-foreground)]">{{ language() }}</span>
                <button
                    class="rounded-md px-2 py-1 text-xs text-[var(--kui-muted-foreground)] hover:bg-[var(--kui-accent)] hover:text-[var(--kui-accent-foreground)] transition-colors"
                    (click)="copyCode()"
                >
                    {{ copied() ? 'Copied!' : 'Copy' }}
                </button>
            </div>
            <pre class="overflow-x-auto p-4 text-sm leading-relaxed"><code>{{ code() }}</code></pre>
        </div>
    `,
})
export class CodeBlock {
    readonly code = input.required<string>();
    readonly language = input('typescript');

    protected readonly copied = signal(false);

    protected copyCode(): void {
        navigator.clipboard.writeText(this.code());
        this.copied.set(true);
        setTimeout(() => this.copied.set(false), 2000);
    }
}
