import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KuiDescription, KuiFormField, KuiInput, KuiLabel } from 'kui-components';
import { CodeBlock } from '../../../shared/code-block/code-block';
import { ComponentPreview } from '../../../shared/component-preview/component-preview';

@Component({
    selector: 'app-input-doc',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [KuiInput, KuiFormField, KuiLabel, KuiDescription, CodeBlock, ComponentPreview],
    template: `
        <div class="max-w-3xl space-y-10">
            <!-- Header -->
            <div>
                <h1 class="text-3xl font-bold tracking-tight">Input</h1>
                <p class="mt-2 text-lg text-[var(--kui-muted-foreground)]">
                    Displays a form input field or a component that looks like an input field.
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

            <!-- Default -->
            <section>
                <h2 class="mb-4 text-xl font-semibold" id="default">Default</h2>
                <app-component-preview [code]="defaultCode">
                    <input kuiInput placeholder="Email" type="email" />
                </app-component-preview>
            </section>

            <!-- Sizes -->
            <section>
                <h2 class="mb-4 text-xl font-semibold" id="sizes">Sizes</h2>
                <app-component-preview [code]="sizesCode">
                    <div class="flex flex-col gap-3 w-full max-w-sm">
                        <input kuiInput size="sm" placeholder="Small" />
                        <input kuiInput placeholder="Default" />
                        <input kuiInput size="lg" placeholder="Large" />
                    </div>
                </app-component-preview>
            </section>

            <!-- Disabled -->
            <section>
                <h2 class="mb-4 text-xl font-semibold" id="disabled">Disabled</h2>
                <app-component-preview [code]="disabledCode">
                    <input kuiInput placeholder="Disabled" disabled />
                </app-component-preview>
            </section>

            <!-- With Form Field -->
            <section>
                <h2 class="mb-4 text-xl font-semibold" id="form-field">With Form Field</h2>
                <app-component-preview [code]="formFieldCode">
                    <div kuiFormField class="w-full max-w-sm">
                        <label kuiLabel>Email</label>
                        <input kuiInput placeholder="you&#64;example.com" type="email" />
                        <span kuiDescription>We'll never share your email.</span>
                    </div>
                </app-component-preview>
            </section>

            <!-- Textarea -->
            <section>
                <h2 class="mb-4 text-xl font-semibold" id="textarea">Textarea</h2>
                <app-component-preview [code]="textareaCode">
                    <textarea kuiInput placeholder="Write your message..." class="w-full max-w-sm"></textarea>
                </app-component-preview>
            </section>

            <!-- API Reference -->
            <section>
                <h2 class="mb-4 text-xl font-semibold" id="api">API Reference</h2>

                <h3 class="mb-2 font-medium">KuiInput</h3>
                <div class="overflow-x-auto rounded-lg border border-[var(--kui-border)] mb-6">
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
                                <td class="px-4 py-2 font-mono text-xs">size</td>
                                <td class="px-4 py-2 font-mono text-xs">'default' | 'sm' | 'lg'</td>
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

                <h3 class="mb-2 font-medium">Form Field Directives</h3>
                <div class="overflow-x-auto rounded-lg border border-[var(--kui-border)]">
                    <table class="w-full text-sm">
                        <thead>
                            <tr class="border-b border-[var(--kui-border)] bg-[var(--kui-muted)]">
                                <th class="px-4 py-2 text-left font-medium">Directive</th>
                                <th class="px-4 py-2 text-left font-medium">Selector</th>
                                <th class="px-4 py-2 text-left font-medium">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b border-[var(--kui-border)]">
                                <td class="px-4 py-2 font-mono text-xs">KuiFormField</td>
                                <td class="px-4 py-2 font-mono text-xs">[kuiFormField]</td>
                                <td class="px-4 py-2 text-xs">Container for form field elements</td>
                            </tr>
                            <tr class="border-b border-[var(--kui-border)]">
                                <td class="px-4 py-2 font-mono text-xs">KuiLabel</td>
                                <td class="px-4 py-2 font-mono text-xs">[kuiLabel]</td>
                                <td class="px-4 py-2 text-xs">Label for a form control</td>
                            </tr>
                            <tr class="border-b border-[var(--kui-border)]">
                                <td class="px-4 py-2 font-mono text-xs">KuiDescription</td>
                                <td class="px-4 py-2 font-mono text-xs">[kuiDescription]</td>
                                <td class="px-4 py-2 text-xs">Helper text for a form control</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-mono text-xs">KuiError</td>
                                <td class="px-4 py-2 font-mono text-xs">[kuiError]</td>
                                <td class="px-4 py-2 text-xs">Error message for a form control</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    `,
})
export class InputDoc {
    protected readonly installCode = `import { KuiInput, KuiFormField, KuiLabel, KuiDescription, KuiError } from 'kui-components';

@Component({
    imports: [KuiInput, KuiFormField, KuiLabel, KuiDescription, KuiError],
})
export class MyComponent {}`;

    protected readonly usageCode = `<input kuiInput placeholder="Email" />`;

    protected readonly defaultCode = `<input kuiInput placeholder="Email" type="email" />`;

    protected readonly sizesCode = `<input kuiInput size="sm" placeholder="Small" />
<input kuiInput placeholder="Default" />
<input kuiInput size="lg" placeholder="Large" />`;

    protected readonly disabledCode = `<input kuiInput placeholder="Disabled" disabled />`;

    protected readonly formFieldCode = `<div kuiFormField>
    <label kuiLabel>Email</label>
    <input kuiInput placeholder="you@example.com" type="email" />
    <span kuiDescription>We'll never share your email.</span>
</div>`;

    protected readonly textareaCode = `<textarea kuiInput placeholder="Write your message..."></textarea>`;
}
