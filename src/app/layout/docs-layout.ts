import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

interface NavItem {
    label: string;
    route: string;
}

interface NavGroup {
    title: string;
    items: NavItem[];
}

@Component({
    selector: 'app-docs-layout',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RouterOutlet, RouterLink, RouterLinkActive],
    template: `
        <div class="min-h-screen bg-[var(--kui-background)] text-[var(--kui-foreground)]">
            <!-- Header -->
            <header
                class="sticky top-0 z-50 border-b border-[var(--kui-border)] bg-[var(--kui-background)]/95 backdrop-blur"
            >
                <div class="mx-auto flex h-14 max-w-screen-2xl items-center justify-between px-6">
                    <a routerLink="/" class="flex items-center gap-2 font-bold text-lg">
                        <span
                            class="rounded-md bg-[var(--kui-primary)] px-2 py-0.5 text-[var(--kui-primary-foreground)] text-sm"
                        >
                            KUI
                        </span>
                        <span>Components</span>
                    </a>

                    <div class="flex items-center gap-3">
                        <button
                            class="rounded-md p-2 hover:bg-[var(--kui-accent)] transition-colors"
                            (click)="toggleTheme()"
                            [attr.aria-label]="isDark() ? 'Switch to light mode' : 'Switch to dark mode'"
                        >
                            @if (isDark()) {
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <circle cx="12" cy="12" r="4" />
                                    <path d="M12 2v2" />
                                    <path d="M12 20v2" />
                                    <path d="m4.93 4.93 1.41 1.41" />
                                    <path d="m17.66 17.66 1.41 1.41" />
                                    <path d="M2 12h2" />
                                    <path d="M20 12h2" />
                                    <path d="m6.34 17.66-1.41 1.41" />
                                    <path d="m19.07 4.93-1.41 1.41" />
                                </svg>
                            } @else {
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                                </svg>
                            }
                        </button>

                        <a
                            href="https://github.com/KikoMola/kui"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="rounded-md p-2 hover:bg-[var(--kui-accent)] transition-colors"
                            aria-label="GitHub repository"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path
                                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"
                                />
                            </svg>
                        </a>

                        <!-- Mobile menu button -->
                        <button
                            class="rounded-md p-2 hover:bg-[var(--kui-accent)] transition-colors md:hidden"
                            (click)="sidebarOpen.set(!sidebarOpen())"
                            aria-label="Toggle menu"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <line x1="4" x2="20" y1="12" y2="12" />
                                <line x1="4" x2="20" y1="6" y2="6" />
                                <line x1="4" x2="20" y1="18" y2="18" />
                            </svg>
                        </button>
                    </div>
                </div>
            </header>

            <div class="mx-auto flex max-w-screen-2xl">
                <!-- Sidebar -->
                <aside
                    class="fixed inset-y-0 left-0 z-40 w-64 transform border-r border-[var(--kui-border)] bg-[var(--kui-background)] pt-14 transition-transform md:sticky md:top-14 md:h-[calc(100vh-3.5rem)] md:translate-x-0"
                    [class.translate-x-0]="sidebarOpen()"
                    [class.-translate-x-full]="!sidebarOpen()"
                >
                    <nav class="h-full overflow-y-auto p-4">
                        @for (group of navGroups; track group.title) {
                            <div class="mb-4">
                                <h4 class="mb-1 px-2 text-sm font-semibold text-[var(--kui-muted-foreground)]">
                                    {{ group.title }}
                                </h4>
                                <ul class="space-y-0.5">
                                    @for (item of group.items; track item.route) {
                                        <li>
                                            <a
                                                [routerLink]="item.route"
                                                routerLinkActive="bg-[var(--kui-accent)] text-[var(--kui-accent-foreground)] font-medium"
                                                class="block rounded-md px-2 py-1.5 text-sm text-[var(--kui-muted-foreground)] hover:bg-[var(--kui-accent)] hover:text-[var(--kui-accent-foreground)] transition-colors"
                                                (click)="sidebarOpen.set(false)"
                                            >
                                                {{ item.label }}
                                            </a>
                                        </li>
                                    }
                                </ul>
                            </div>
                        }
                    </nav>
                </aside>

                <!-- Overlay for mobile -->
                @if (sidebarOpen()) {
                    <div class="fixed inset-0 z-30 bg-black/50 md:hidden" (click)="sidebarOpen.set(false)"></div>
                }

                <!-- Main content -->
                <main class="flex-1 px-6 py-8 md:px-12 lg:px-16">
                    <router-outlet />
                </main>
            </div>
        </div>
    `,
})
export class DocsLayout {
    protected readonly sidebarOpen = signal(false);
    protected readonly isDark = signal(false);

    protected readonly navGroups: NavGroup[] = [
        {
            title: 'Getting Started',
            items: [{ label: 'Introduction', route: '/docs' }],
        },
        {
            title: 'Components',
            items: [
                { label: 'Button', route: '/docs/button' },
                { label: 'Input', route: '/docs/input' },
            ],
        },
    ];

    constructor() {
        const stored = typeof localStorage !== 'undefined' ? localStorage.getItem('kui-theme') : null;
        if (
            stored === 'dark' ||
            (!stored && typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            this.isDark.set(true);
            document.documentElement.setAttribute('data-theme', 'dark');
        }
    }

    protected toggleTheme(): void {
        const next = !this.isDark();
        this.isDark.set(next);
        const theme = next ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('kui-theme', theme);
    }
}
