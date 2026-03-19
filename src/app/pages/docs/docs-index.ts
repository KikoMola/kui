import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-docs-index',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RouterLink],
    template: `
        <div class="max-w-3xl space-y-10">
            <div>
                <h1 class="text-3xl font-bold tracking-tight">Introduction</h1>
                <p class="mt-2 text-lg text-[var(--kui-muted-foreground)]">
                    Beautifully designed components built on top of ng-primitives for Angular.
                </p>
            </div>

            <section>
                <h2 class="mb-4 text-xl font-semibold">What is KUI?</h2>
                <p class="text-[var(--kui-muted-foreground)] leading-relaxed">
                    KUI is a collection of styled, accessible Angular components built on top of
                    <a
                        href="https://ng-primitives.mintlify.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-[var(--kui-ring)] underline underline-offset-4"
                    >
                        ng-primitives </a
                    >. Each component is fully styled out of the box while remaining customizable through CSS custom
                    properties and class overrides.
                </p>
            </section>

            <section>
                <h2 class="mb-4 text-xl font-semibold">Getting Started</h2>
                <div class="space-y-4 text-[var(--kui-muted-foreground)] leading-relaxed">
                    <p>Install the package:</p>
                    <pre
                        class="rounded-lg border border-[var(--kui-border)] bg-[var(--kui-card)] p-4 text-sm"
                    ><code>npm install kui-components ng-primitives</code></pre>

                    <p>Import the theme CSS in your global styles:</p>
                    <pre
                        class="rounded-lg border border-[var(--kui-border)] bg-[var(--kui-card)] p-4 text-sm"
                    ><code>&#64;import 'kui-components/src/lib/theme/kui-theme.css';</code></pre>

                    <p>Then import and use the components:</p>
                    <pre
                        class="rounded-lg border border-[var(--kui-border)] bg-[var(--kui-card)] p-4 text-sm"
                    ><code>import &#123; KuiButton &#125; from 'kui-components';

&#64;Component(&#123;
    imports: [KuiButton],
    template: \`&lt;button kuiButton&gt;Click me&lt;/button&gt;\`,
&#125;)
export class MyComponent &#123;&#125;</code></pre>
                </div>
            </section>

            <section>
                <h2 class="mb-4 text-xl font-semibold">Components</h2>
                <div class="grid gap-4 sm:grid-cols-2">
                    <a
                        routerLink="/docs/button"
                        class="rounded-lg border border-[var(--kui-border)] p-4 hover:bg-[var(--kui-accent)] transition-colors"
                    >
                        <h3 class="font-medium">Button</h3>
                        <p class="text-sm text-[var(--kui-muted-foreground)]">Multiple variants, sizes, and states.</p>
                    </a>
                    <a
                        routerLink="/docs/input"
                        class="rounded-lg border border-[var(--kui-border)] p-4 hover:bg-[var(--kui-accent)] transition-colors"
                    >
                        <h3 class="font-medium">Input</h3>
                        <p class="text-sm text-[var(--kui-muted-foreground)]">
                            Text inputs with form field integration.
                        </p>
                    </a>
                </div>
            </section>
        </div>
    `,
})
export class DocsIndex {}
