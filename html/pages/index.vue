<template>
  <div class="relative flex flex-col min-h-screen max-w-[100vw] overflow-hidden">
    <NuxtLayout name="main" @scrollTo="scrollToSection">

      <LazySectionHeroShot class="mb-10" titleText="Digitalisez votre succès :"
        bottomLineText="Sites web, applications mobiles & outils métiers sur mesure"
        subtitleText="Développons ensemble votre présence en ligne, vos outils de productivité, sécurisons votre infrastructure et automatisons vos processus."
        imageUrl="/images/pages/homeHeroShot.webp" imageAlt="Moi version cartoon 3D entrain de sauter"
        @scrollTo="scrollToSection" />
      <LazySectionServices class="mb-10" id="services" />
      <LazySectionHomeAbout class="mb-10" @scrollTo="scrollToSection" />
      <LazySectionHomeTechnologies class="mb-10" />
      <LazySectionContact class="mb-10" id="contact" />

    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const { $gsap: gsap } = useNuxtApp();
const config = useRuntimeConfig();
const websiteUrl = config.public.websiteUrl;

useHead({
  title: 'Lugh Web - Développement web et mobile sur mesure',
  htmlAttrs: {
    lang: 'fr'
  },
  meta: [
    { name: "description", content: "Développement web et mobile sur mesure, audit de sécurité, automatisation de processus." },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "robots", content: "index, follow" },
    { name: "googlebot", content: "index, follow" },
    { name: "author", content: "Lugh Web" },
    { name: "keywords", content: "développement web, développement mobile, audit de sécurité, automatisation de processus" },
    { property: "og:title", content: "Lugh Web - Développement web et mobile sur mesure" },
    { property: "og:description", content: "Développement web et mobile sur mesure, audit de sécurité, automatisation de processus." },
    { property: "og:image", content: websiteUrl + "/images/pages/home/heroshot.webp" },
    { property: "twitter:card", content: "summary_large_image" },
    { property: "twitter:title", content: "Lugh Web - Développement web et mobile sur mesure" },
    { property: "twitter:description", content: "Développement web et mobile sur mesure, audit de sécurité, automatisation de processus." },
    { property: "twitter:image", content: websiteUrl + "/images/pages/home/heroshot.webp" }
  ],
  link: [{ rel: "canonical", href: websiteUrl }],
});
const scrollToSection = (targetId: string) => {
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    let offsetTop = targetElement.offsetTop - 100;
    gsap.to(window, {
      duration: 2,
      scrollTo: { y: offsetTop, autoKill: false },
      ease: "power2.inOut"
    });
  }
};

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>