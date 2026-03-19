import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { KuiButton } from 'kui-components';

@Component({
    selector: 'app-home',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RouterLink, KuiButton],
    template: `
        <div class="flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center px-4 text-center">
            <div class="mb-4 rounded-full bg-[var(--kui-muted)] px-3 py-1 text-sm text-[var(--kui-muted-foreground)]">
                Built on ng-primitives
            </div>

            <h1 class="mb-4 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                Build beautiful Angular
                <br />
                <span
                    class="bg-gradient-to-r from-[var(--kui-ring)] to-[var(--kui-destructive)] bg-clip-text text-transparent"
                >
                    interfaces faster
                </span>
            </h1>

            <p class="mb-8 max-w-2xl text-lg text-[var(--kui-muted-foreground)]">
                A collection of beautifully designed, accessible, and customizable components for Angular. Styled on top
                of headless primitives. Dark mode included.
            </p>

            <div class="flex gap-4">
                <a kuiButton routerLink="/docs/button">Get Started</a>
                <a kuiButton variant="outline" routerLink="/docs">Browse Components</a>
            </div>

            <!-- Features grid -->
            <div class="mt-20 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                @for (feature of features; track feature.title) {
                    <div class="rounded-lg border border-[var(--kui-border)] p-6 text-left">
                        <div class="mb-2 text-2xl">{{ feature.icon }}</div>
                        <h3 class="mb-1 font-semibold">{{ feature.title }}</h3>
                        <p class="text-sm text-[var(--kui-muted-foreground)]">{{ feature.description }}</p>
                    </div>
                }
            </div>
        </div>
    `,
})
export class Home {
    protected readonly features = [
        {
            icon: '♿',
            title: 'Accessible',
            description: 'Built on ng-primitives with WAI-ARIA patterns baked in.',
        },
        {
            icon: '🎨',
            title: 'Customizable',
            description: 'CSS custom properties and class overrides. Make it yours.',
        },
        {
            icon: '🌙',
            title: 'Dark Mode',
            description: 'Light and dark themes out of the box, respects system preference.',
        },
        {
            icon: '⚡',
            title: 'Lightweight',
            description: 'Directives on native elements. No heavy wrappers.',
        },
    ];
}
