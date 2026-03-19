import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';

@Component({
    selector: 'app-code-block',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <div class="overflow-hidden rounded-lg border border-[var(--kui-code-border)] bg-[var(--kui-code-bg)] text-[var(--kui-code-foreground)]">
            <div
                class="flex items-center justify-between border-b border-[var(--kui-code-border)] px-4 py-2.5 bg-[var(--kui-code-header)]"
            >
                <div class="flex items-center gap-3">
                    <div class="flex items-center gap-1.5">
                        <span class="size-3 rounded-full bg-[#ff5f57]"></span>
                        <span class="size-3 rounded-full bg-[#febc2e]"></span>
                        <span class="size-3 rounded-full bg-[#28c840]"></span>
                    </div>
                    <span class="text-xs text-[var(--kui-code-muted)]">{{ language() }}</span>
                </div>
                <button
                    class="rounded-md px-2 py-1 text-xs text-[var(--kui-code-muted)] hover:bg-[var(--kui-code-border)] hover:text-[var(--kui-code-foreground)] transition-colors"
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
