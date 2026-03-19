import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import {
    LucideAngularModule,
    Mail,
    Heart,
    Search,
    Send,
    LoaderCircle,
    ChevronRight,
    CircleCheck,
    CircleAlert,
    CircleX,
} from 'lucide-angular';

import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
    providers: [
        provideBrowserGlobalErrorListeners(),
        provideRouter(routes),
        provideHttpClient(),
        importProvidersFrom(
            LucideAngularModule.pick({ Mail, Heart, Search, Send, LoaderCircle, ChevronRight, CircleCheck, CircleAlert, CircleX }),
        ),
        provideTranslateService({
            loader: provideTranslateHttpLoader({
                prefix: '/assets/i18n/',
                suffix: '.json',
            }),
            fallbackLang: 'en',
            lang: 'en',
        }),
    ],
};
