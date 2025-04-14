import { defineNuxtRouteMiddleware } from 'nuxt/app';

export default defineNuxtRouteMiddleware((to, from) => {
    const config = useRuntimeConfig();
    const headers = {
        'X-Frame-Options': 'DENY',
        'X-Content-Type-Options': 'nosniff',
        'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; object-src 'none'; frame-ancestors 'none'; base-uri 'self';",
    };

    Object.entries(headers).forEach(([header, value]) => {
        if (process.server) {
            useHead({
                meta: [
                    {
                        key: header,
                        name: 'http-equiv',
                        content: header,
                    },
                ],
            });

        }
    });

});