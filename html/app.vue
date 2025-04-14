<template>
  <div>

    <Head>
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <Meta name="robots" content="index, follow" />
      <Meta name="googlebot" content="index, follow" />

      <!-- Security Headers -->
      <Meta http-equiv="Content-Security-Policy" content="
    default-src 'self';
    script-src 'self' 'unsafe-inline';
    style-src 'self' fonts.googleapis.com 'unsafe-inline';
    img-src 'self' data:;
    font-src 'self' fonts.gstatic.com;
    connect-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
  " />
      <Meta http-equiv="X-Content-Type-Options" content="nosniff" />
      <Meta name="referrer-policy" content="strict-origin-when-cross-origin" />
      <Meta http-equiv="Permissions-Policy" content="geolocation=(), camera=(), microphone=(), display-capture=()" />

    </Head>
    <main class="overflow-hidden">
      <NuxtPage />
    </main>
  </div>
</template>

<script setup>
// No script setup needed for these static meta tags
</script>