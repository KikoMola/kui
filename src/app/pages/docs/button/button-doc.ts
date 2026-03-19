import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KuiButton } from 'kui-components';
import { CodeBlock } from '../../../shared/code-block/code-block';
import { ComponentPreview } from '../../../shared/component-preview/component-preview';

@Component({
    selector: 'app-button-doc',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [KuiButton, CodeBlock, ComponentPreview],
    template: `
        <div class="max-w-3xl space-y-10">
            <!-- Header -->
            <div>
                <h1 class="text-3xl font-bold tracking-tight">Button</h1>
                <p class="mt-2 text-lg text-[var(--kui-muted-foreground)]">
                    Displays a button or a component that looks like a button.
                </p>
            </div>

            <!-- Installation -->
            <section>
                <h2 class="mb-4 text-xl font-semibold" id="installation">Installation</h2>
                <app-code-block [code]="installCode" language="typescript" />
            </section>

            <!-- Usage -->
            <section>
                <h2 class="mb-4 text-xl font-semibold" id="usage">Usage</h2>
                <app-code-block [code]="usageCode" language="html" />
            </section>

            <!-- Variants -->
            <section>
                <h2 class="mb-4 text-xl font-semibold" id="variants">Variants</h2>

                <div class="space-y-6">
                    <div>
                        <h3 class="mb-2 font-medium" id="default">Default</h3>
                        <app-component-preview [code]="defaultCode">
                            <button kuiButton>Default</button>
                        </app-component-preview>
                    </div>

                    <div>
                        <h3 class="mb-2 font-medium" id="destructive">Destructive</h3>
                        <app-component-preview [code]="destructiveCode">
                            <button kuiButton variant="destructive">Destructive</button>
                        </app-component-preview>
                    </div>

                    <div>
                        <h3 class="mb-2 font-medium" id="outline">Outline</h3>
                        <app-component-preview [code]="outlineCode">
                            <button kuiButton variant="outline">Outline</button>
                        </app-component-preview>
                    </div>

                    <div>
                        <h3 class="mb-2 font-medium" id="secondary">Secondary</h3>
                        <app-component-preview [code]="secondaryCode">
                            <button kuiButton variant="secondary">Secondary</button>
                        </app-component-preview>
                    </div>

                    <div>
                        <h3 class="mb-2 font-medium" id="ghost">Ghost</h3>
                        <app-component-preview [code]="ghostCode">
                            <button kuiButton variant="ghost">Ghost</button>
                        </app-component-preview>
                    </div>

                    <div>
                        <h3 class="mb-2 font-medium" id="link">Link</h3>
                        <app-component-preview [code]="linkCode">
                            <button kuiButton variant="link">Link</button>
                        </app-component-preview>
                    </div>
                </div>
            </section>

            <!-- Sizes -->
            <section>
                <h2 class="mb-4 text-xl font-semibold" id="sizes">Sizes</h2>
                <app-component-preview [code]="sizesCode">
                    <button kuiButton size="sm">Small</button>
                    <button kuiButton>Default</button>
                    <button kuiButton size="lg">Large</button>
                    <button kuiButton size="icon" aria-label="Star">★</button>
                </app-component-preview>
            </section>

            <!-- Disabled -->
            <section>
                <h2 class="mb-4 text-xl font-semibold" id="disabled">Disabled</h2>
                <app-component-preview [code]="disabledCode">
                    <button kuiButton disabled>Disabled</button>
                    <button kuiButton variant="outline" disabled>Disabled</button>
                </app-component-preview>
            </section>

            <!-- API Reference -->
            <section>
                <h2 class="mb-4 text-xl font-semibold" id="api">API Reference</h2>
                <div class="overflow-x-auto rounded-lg border border-[var(--kui-border)]">
                    <table class="w-full text-sm">
                        <thead>
                            <tr class="border-b border-[var(--kui-border)] bg-[var(--kui-muted)]">
                                <th class="px-4 py-2 text-left font-medium">Input</th>
                                <th class="px-4 py-2 text-left font-medium">Type</th>
                                <th class="px-4 py-2 text-left font-medium">Default</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b border-[var(--kui-border)]">
                                <td class="px-4 py-2 font-mono text-xs">variant</td>
                                <td class="px-4 py-2 font-mono text-xs">
                                    'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
                                </td>
                                <td class="px-4 py-2 font-mono text-xs">'default'</td>
                            </tr>
                            <tr class="border-b border-[var(--kui-border)]">
                                <td class="px-4 py-2 font-mono text-xs">size</td>
                                <td class="px-4 py-2 font-mono text-xs">'default' | 'sm' | 'lg' | 'icon'</td>
                                <td class="px-4 py-2 font-mono text-xs">'default'</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-mono text-xs">disabled</td>
                                <td class="px-4 py-2 font-mono text-xs">boolean</td>
                                <td class="px-4 py-2 font-mono text-xs">false</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    `,
})
export class ButtonDoc {
    protected readonly installCode = `import { KuiButton } from 'kui-components';

@Component({
    imports: [KuiButton],
})
export class MyComponent {}`;

    protected readonly usageCode = `<button kuiButton>Click me</button>`;

    protected readonly defaultCode = `<button kuiButton>Default</button>`;
    protected readonly destructiveCode = `<button kuiButton variant="destructive">Destructive</button>`;
    protected readonly outlineCode = `<button kuiButton variant="outline">Outline</button>`;
    protected readonly secondaryCode = `<button kuiButton variant="secondary">Secondary</button>`;
    protected readonly ghostCode = `<button kuiButton variant="ghost">Ghost</button>`;
    protected readonly linkCode = `<button kuiButton variant="link">Link</button>`;

    protected readonly sizesCode = `<button kuiButton size="sm">Small</button>
<button kuiButton>Default</button>
<button kuiButton size="lg">Large</button>
<button kuiButton size="icon" aria-label="Star">★</button>`;

    protected readonly disabledCode = `<button kuiButton disabled>Disabled</button>
<button kuiButton variant="outline" disabled>Disabled</button>`;
}
