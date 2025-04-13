<template>
    <div class="relative flex flex-col min-h-screen max-w-[100vw] overflow-hidden">
      <NuxtLayout name="main" @scrollTo="scrollToSection">
  
        <LazySectionHeroShot class="mb-10" titleText="Optimisez vos opérations avec des outils métiers personnalisés :"
          bottomLineText="Développement de solutions logicielles pour une efficacité accrue"
          subtitleText="Simplifiez la gestion de vos données et améliorez vos processus internes sur mesure."
          imageUrl="/images/pages/tool.webp" imageAlt="Moi version cartoon 3D entrain de sauter"
          @scrollTo="scrollToSection" />
  
  
        <LazySectionServices class="mb-10" id="services" />
        <LazySectionContact class="mb-10" id="contact" />
  
      </NuxtLayout>
    </div>
  </template>
  
  <script setup lang="ts">
  const { $gsap: gsap } = useNuxtApp();
  const config = useRuntimeConfig();
  const websiteUrl = config.public.websiteUrl;
  
  useHead({
  title: 'Lugh Web - Développement d\'outils métiers personnalisés',
  htmlAttrs: {
    lang: 'fr'
  },
  meta: [
    { name: "description", content: "Développement d'outils métiers sur mesure pour optimiser vos processus internes et faciliter la gestion de vos données." },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "robots", content: "index, follow" },
    { name: "googlebot", content: "index, follow" },
    { name: "author", content: "Lugh Web" },
    { name: "keywords", content: "outils métiers, développement sur mesure, optimisation processus, gestion données" },
    { property: "og:title", content: "Lugh Web - Développement d'outils métiers personnalisés" },
    { property: "og:description", content: "Développement d'outils métiers sur mesure pour optimiser vos processus internes et faciliter la gestion de vos données." },
    { property: "og:image", content: websiteUrl + "/images/pages/tool.webp" },
    { property: "twitter:card", content: "summary_large_image" },
    { property: "twitter:title", content: "Lugh Web - Développement d'outils métiers personnalisés" },
    { property: "twitter:description", content: "Développement d'outils métiers sur mesure pour optimiser vos processus internes et faciliter la gestion de vos données." },
    { property: "twitter:image", content: websiteUrl + "/images/pages/tool.webp" }
  ],
  link: [{ rel: "canonical", href: websiteUrl + "/services/tool" }],
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