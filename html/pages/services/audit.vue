<template>
  <div class="relative flex flex-col min-h-screen max-w-[100vw] overflow-hidden">
    <NuxtLayout name="main" @scrollTo="scrollToSection">

      <LazySectionHeroShot class="mb-10" titleText="Protégez votre actif le plus précieux : vos données"
        bottomLineText="Analyse approfondie de votre système d'information et identification des failles"
        subtitleText="Sécurisons ensemble votre infrastructure numérique contre les menaces potentielles."
        imageUrl="/images/pages/audit.webp" imageAlt="Moi version cartoon 3D entrain de sauter"
        serviceButtonText="Découvrez mes autres services" imageColorBgClass="bg-egyptian-blue-500" @scrollTo="scrollToSection" />


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
  title: 'Lugh Web - Audit de sécurité de votre système d\'information',
  htmlAttrs: {
    lang: 'fr'
  },
  meta: [
    { name: "description", content: "Analyse approfondie de votre système d'information pour identifier les failles de sécurité et garantir la protection de vos données sensibles." },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "robots", content: "index, follow" },
    { name: "googlebot", content: "index, follow" },
    { name: "author", content: "Lugh Web" },
    { name: "keywords", content: "audit sécurité, sécurité informatique, protection données, analyse vulnérabilités" },
    { property: "og:title", content: "Lugh Web - Audit de sécurité de votre système d'information" },
    { property: "og:description", content: "Analyse approfondie de votre système d'information pour identifier les failles de sécurité et garantir la protection de vos données sensibles." },
    { property: "og:image", content: websiteUrl + "/images/pages/audit.webp" },
    { property: "twitter:card", content: "summary_large_image" },
    { property: "twitter:title", content: "Lugh Web - Audit de sécurité de votre système d'information" },
    { property: "twitter:description", content: "Analyse approfondie de votre système d'information pour identifier les failles de sécurité et garantir la protection de vos données sensibles." },
    { property: "twitter:image", content: websiteUrl + "/images/pages/audit.webp" }
  ],
  link: [{ rel: "canonical", href: websiteUrl + "/services/audit" }],
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