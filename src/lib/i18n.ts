// src/i18n.js
import { browser } from '$app/env';
import { register, init, getLocaleFromNavigator, locale } from 'svelte-i18n';

register('en-US', () => import('./locale/en.json'));
register('es', () => import('./locale/es.json'));

init({
    fallbackLocale: 'en',
    initialLocale: (browser ? localStorage.getItem("locale") : null) || getLocaleFromNavigator(),
});

locale.subscribe(locale => {
    if (browser) {
        localStorage.setItem("locale", locale);
    }
    return locale;
});