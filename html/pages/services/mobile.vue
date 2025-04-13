<template>
    <div class="relative flex flex-col min-h-screen max-w-[100vw] overflow-hidden">
      <NuxtLayout name="main" @scrollTo="scrollToSection">
  
        <LazySectionHeroShot class="mb-10" titleText="L'expérience mobile au service de votre audience :"
          bottomLineText="Conception d'applications intuitives pour Ios et Android"
          subtitleText="Offrez à vos utilisateurs une expérience unique et engageante sur tous les supports."
          imageUrl="/images/pages/mobile.webp" imageAlt="Moi version cartoon 3D entrain de sauter"
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
  title: 'Lugh Web - Développement d\'applications mobiles sur mesure',
  htmlAttrs: {
    lang: 'fr'
  },
  meta: [
    { name: "description", content: "Conception et développement d'applications mobiles intuitives et performantes pour iOS et Android." },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "robots", content: "index, follow" },
    { name: "googlebot", content: "index, follow" },
    { name: "author", content: "Lugh Web" },
    { name: "keywords", content: "développement application mobile, application ios, application android, développement mobile sur mesure" },
    { property: "og:title", content: "Lugh Web - Développement d'applications mobiles sur mesure" },
    { property: "og:description", content: "Conception et développement d'applications mobiles intuitives et performantes pour iOS et Android." },
    { property: "og:image", content: websiteUrl + "/images/pages/mobile.webp" },
    { property: "twitter:card", content: "summary_large_image" },
    { property: "twitter:title", content: "Lugh Web - Développement d'applications mobiles sur mesure" },
    { property: "twitter:description", content: "Conception et développement d'applications mobiles intuitives et performantes pour iOS et Android." },
    { property: "twitter:image", content: websiteUrl + "/images/pages/mobile.webp" }
  ],
  link: [{ rel: "canonical", href: websiteUrl + "/services/mobile" }],
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