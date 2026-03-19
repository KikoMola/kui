import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { KuiCharacterCount, KuiDescription, KuiError, KuiFormField, KuiInput, KuiLabel } from 'kui-components';
import { LucideAngularModule } from 'lucide-angular';
import { CodeBlock } from '../../../shared/code-block/code-block';
import { ComponentPreview } from '../../../shared/component-preview/component-preview';

@Component({
    selector: 'app-input-doc',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        KuiInput,
        KuiFormField,
        KuiLabel,
        KuiDescription,
        KuiError,
        KuiCharacterCount,
        CodeBlock,
        ComponentPreview,
        LucideAngularModule,
    ],
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

            <!-- With Icons -->
            <section>
                <h2 class="mb-4 text-xl font-semibold" id="with-icons">With Icons</h2>

                <div class="space-y-6">
                    <div>
                        <h3 class="mb-2 font-medium">Icon Left</h3>
                        <app-component-preview [code]="iconLeftCode">
                            <div class="relative w-full max-w-sm">
                                <lucide-icon
                                    name="search"
                                    [size]="16"
                                    class="pointer-events-none absolute left-3 top-1/2 inline-flex -translate-y-1/2 items-center text-[var(--kui-muted-foreground)]"
                                />
                                <input kuiInput placeholder="Search..." class="w-full pl-9" />
                            </div>
                        </app-component-preview>
                    </div>

                    <div>
                        <h3 class="mb-2 font-medium">Icon Right</h3>
                        <app-component-preview [code]="iconRightCode">
                            <div class="relative w-full max-w-sm">
                                <input kuiInput placeholder="you&#64;example.com" type="email" class="w-full pr-9" />
                                <lucide-icon
                                    name="mail"
                                    [size]="16"
                                    class="pointer-events-none absolute right-3 top-1/2 inline-flex -translate-y-1/2 items-center text-[var(--kui-muted-foreground)]"
                                />
                            </div>
                        </app-component-preview>
                    </div>

                    <div>
                        <h3 class="mb-2 font-medium">Both Sides</h3>
                        <app-component-preview [code]="iconBothCode">
                            <div class="relative w-full max-w-sm">
                                <lucide-icon
                                    name="mail"
                                    [size]="16"
                                    class="pointer-events-none absolute left-3 top-1/2 inline-flex -translate-y-1/2 items-center text-[var(--kui-muted-foreground)]"
                                />
                                <input kuiInput placeholder="you&#64;example.com" type="email" class="w-full pl-9 pr-9" />
                                <lucide-icon
                                    name="circle-check"
                                    [size]="16"
                                    class="pointer-events-none absolute right-3 top-1/2 inline-flex -translate-y-1/2 items-center text-[var(--kui-success)]"
                                />
                            </div>
                        </app-component-preview>
                    </div>
                </div>
            </section>

            <!-- Validation States -->
            <section>
                <h2 class="mb-4 text-xl font-semibold" id="validation">Validation States</h2>

                <div class="space-y-6">
                    <div>
                        <h3 class="mb-2 font-medium">Success</h3>
                        <app-component-preview [code]="successCode">
                            <div kuiFormField class="w-full max-w-sm">
                                <label kuiLabel>Username</label>
                                <input kuiInput state="success" value="johndoe" />
                                <span class="kui-success-message flex items-center gap-1 text-sm">
                                    <lucide-icon name="circle-check" [size]="14" />
                                    Username is available
                                </span>
                            </div>
                        </app-component-preview>
                    </div>

                    <div>
                        <h3 class="mb-2 font-medium">Warning</h3>
                        <app-component-preview [code]="warningCode">
                            <div kuiFormField class="w-full max-w-sm">
                                <label kuiLabel>Password</label>
                                <input kuiInput state="warning" type="password" value="abc123" />
                                <span class="kui-warning-message flex items-center gap-1 text-sm">
                                    <lucide-icon name="circle-alert" [size]="14" />
                                    Password is weak, consider adding symbols
                                </span>
                            </div>
                        </app-component-preview>
                    </div>

                    <div>
                        <h3 class="mb-2 font-medium">Error</h3>
                        <app-component-preview [code]="errorCode">
                            <div kuiFormField class="w-full max-w-sm">
                                <label kuiLabel>Email</label>
                                <input kuiInput state="error" value="not-an-email" type="email" />
                                <span kuiError class="flex items-center gap-1">
                                    <lucide-icon name="circle-x" [size]="14" />
                                    Please enter a valid email address
                                </span>
                            </div>
                        </app-component-preview>
                    </div>
                </div>
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

            <!-- Character Count -->
            <section>
                <h2 class="mb-4 text-xl font-semibold" id="character-count">Character Count</h2>

                <div class="space-y-6">
                    <div>
                        <h3 class="mb-2 font-medium">Basic</h3>
                        <app-component-preview [code]="charCountCode">
                            <div kuiFormField class="w-full max-w-sm">
                                <label kuiLabel>Username</label>
                                <input
                                    kuiInput
                                    placeholder="Choose a username"
                                    maxlength="20"
                                    (input)="onUsernameInput($event)"
                                />
                                <kui-character-count [current]="usernameLength()" [max]="20" />
                            </div>
                        </app-component-preview>
                    </div>

                    <div>
                        <h3 class="mb-2 font-medium">With Description</h3>
                        <app-component-preview [code]="charCountWithDescCode">
                            <div kuiFormField class="w-full max-w-sm">
                                <label kuiLabel>Bio</label>
                                <textarea
                                    kuiInput
                                    placeholder="Tell us about yourself..."
                                    class="w-full"
                                    maxlength="140"
                                    (input)="onBioInput($event)"
                                ></textarea>
                                <div class="flex items-end justify-between">
                                    <span kuiDescription>Brief description for your profile.</span>
                                    <kui-character-count [current]="bioLength()" [max]="140" />
                                </div>
                            </div>
                        </app-component-preview>
                    </div>
                </div>
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
                            <tr class="border-b border-[var(--kui-border)]">
                                <td class="px-4 py-2 font-mono text-xs">state</td>
                                <td class="px-4 py-2 font-mono text-xs">'default' | 'success' | 'warning' | 'error'</td>
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
                            <tr>
                                <td class="px-4 py-2 font-mono text-xs">KuiCharacterCount</td>
                                <td class="px-4 py-2 font-mono text-xs">kui-character-count</td>
                                <td class="px-4 py-2 text-xs">Character count indicator (inputs: current, max)</td>
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

    protected readonly iconLeftCode = `<div class="relative">
    <lucide-icon name="search" [size]="16"
        class="pointer-events-none absolute left-3 top-1/2 inline-flex -translate-y-1/2 items-center text-muted" />
    <input kuiInput placeholder="Search..." class="w-full pl-9" />
</div>`;

    protected readonly iconRightCode = `<div class="relative">
    <input kuiInput placeholder="you@example.com" type="email" class="w-full pr-9" />
    <lucide-icon name="mail" [size]="16"
        class="pointer-events-none absolute right-3 top-1/2 inline-flex -translate-y-1/2 items-center text-muted" />
</div>`;

    protected readonly iconBothCode = `<div class="relative">
    <lucide-icon name="mail" [size]="16"
        class="pointer-events-none absolute left-3 top-1/2 inline-flex -translate-y-1/2 items-center text-muted" />
    <input kuiInput placeholder="you@example.com" class="w-full pl-9 pr-9" />
    <lucide-icon name="circle-check" [size]="16"
        class="pointer-events-none absolute right-3 top-1/2 inline-flex -translate-y-1/2 items-center text-success" />
</div>`;

    protected readonly successCode = `<div kuiFormField>
    <label kuiLabel>Username</label>
    <input kuiInput state="success" value="johndoe" />
    <span class="kui-success-message flex items-center gap-1 text-sm">
        <lucide-icon name="circle-check" [size]="14" />
        Username is available
    </span>
</div>`;

    protected readonly warningCode = `<div kuiFormField>
    <label kuiLabel>Password</label>
    <input kuiInput state="warning" type="password" value="abc123" />
    <span class="kui-warning-message flex items-center gap-1 text-sm">
        <lucide-icon name="circle-alert" [size]="14" />
        Password is weak, consider adding symbols
    </span>
</div>`;

    protected readonly errorCode = `<div kuiFormField>
    <label kuiLabel>Email</label>
    <input kuiInput state="error" value="not-an-email" type="email" />
    <span kuiError class="flex items-center gap-1">
        <lucide-icon name="circle-x" [size]="14" />
        Please enter a valid email address
    </span>
</div>`;

    protected readonly disabledCode = `<input kuiInput placeholder="Disabled" disabled />`;

    protected readonly formFieldCode = `<div kuiFormField>
    <label kuiLabel>Email</label>
    <input kuiInput placeholder="you@example.com" type="email" />
    <span kuiDescription>We'll never share your email.</span>
</div>`;

    protected readonly textareaCode = `<textarea kuiInput placeholder="Write your message..."></textarea>`;

    protected readonly charCountCode = `<div kuiFormField>
    <label kuiLabel>Username</label>
    <input kuiInput placeholder="Choose a username" [maxlength]="20"
        (input)="onUsernameInput($event)" />
    <kui-character-count [current]="usernameLength()" [max]="20" />
</div>`;

    protected readonly charCountWithDescCode = `<div kuiFormField>
    <label kuiLabel>Bio</label>
    <textarea kuiInput placeholder="Tell us about yourself..."
        [maxlength]="140" (input)="onBioInput($event)"></textarea>
    <div class="flex items-end justify-between">
        <span kuiDescription>Brief description for your profile.</span>
        <kui-character-count [current]="bioLength()" [max]="140" />
    </div>
</div>`;

    protected readonly usernameLength = signal(0);
    protected readonly bioLength = signal(0);

    protected onUsernameInput(event: Event): void {
        this.usernameLength.set((event.target as HTMLInputElement).value.length);
    }

    protected onBioInput(event: Event): void {
        this.bioLength.set((event.target as HTMLTextAreaElement).value.length);
    }
}
