<template>
    <div class="relative flex flex-col min-h-screen max-w-[100vw] overflow-hidden">
      <NuxtLayout name="main" @scrollTo="scrollToSection">
  
        <LazyPagesHeroShot class="mb-10" titleText="Une vitrine en ligne à votre image :"
          bottomLineText="Création de sites web sur mesure, e-commerce et vitrines"
          subtitleText="Propulsez votre activité avec un site web professionnel, optimisé pour la performance et le référencement."
          imageUrl="/images/pages/webSite.webp" imageAlt="Moi version cartoon 3D entrain de sauter"
          @scrollTo="scrollToSection" />
  
        <LazyPagesServices class="mb-10" id="services" />
        <LazyPagesContact class="mb-10" id="contact" />
  
      </NuxtLayout>
    </div>
  </template>
  
  <script setup lang="ts">
  const { $gsap: gsap } = useNuxtApp();
  const config = useRuntimeConfig();
  const websiteUrl = config.public.websiteUrl;
  
  useHead({
  title: 'Lugh Web - Création de sites web sur mesure',
  htmlAttrs: {
    lang: 'fr'
  },
  meta: [
    { name: "description", content: "Création de sites web vitrines et e-commerce sur mesure pour une présence en ligne professionnelle et performante." },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "robots", content: "index, follow" },
    { name: "googlebot", content: "index, follow" },
    { name: "author", content: "Lugh Web" },
    { name: "keywords", content: "création site web, site vitrine, site e-commerce, développement web sur mesure" },
    { property: "og:title", content: "Lugh Web - Création de sites web sur mesure" },
    { property: "og:description", content: "Création de sites web vitrines et e-commerce sur mesure pour une présence en ligne professionnelle et performante." },
    { property: "og:image", content: websiteUrl + "/images/pages/webSite.webp" },
    { property: "twitter:card", content: "summary_large_image" },
    { property: "twitter:title", content: "Lugh Web - Création de sites web sur mesure" },
    { property: "twitter:description", content: "Création de sites web vitrines et e-commerce sur mesure pour une présence en ligne professionnelle et performante." },
    { property: "twitter:image", content: websiteUrl + "/images/pages/webSite.webp" }
  ],
  link: [{ rel: "canonical", href: websiteUrl + "/services/website" }],
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