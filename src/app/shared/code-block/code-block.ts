import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';

@Component({
    selector: 'app-code-block',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <div class="overflow-hidden rounded-lg border border-[var(--kui-border)] bg-[oklch(0.16_0.004_285.82)] text-[oklch(0.93_0_0)]">
            <div
                class="flex items-center justify-between border-b border-[oklch(0.25_0.006_285.89)] px-4 py-2.5 bg-[oklch(0.19_0.005_285.85)]"
            >
                <div class="flex items-center gap-3">
                    <div class="flex items-center gap-1.5">
                        <span class="size-3 rounded-full bg-[#ff5f57]"></span>
                        <span class="size-3 rounded-full bg-[#febc2e]"></span>
                        <span class="size-3 rounded-full bg-[#28c840]"></span>
                    </div>
                    <span class="text-xs text-[oklch(0.6_0.01_285.9)]">{{ language() }}</span>
                </div>
                <button
                    class="rounded-md px-2 py-1 text-xs text-[oklch(0.6_0.01_285.9)] hover:bg-[oklch(0.25_0.006_285.89)] hover:text-[oklch(0.85_0_0)] transition-colors"
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
