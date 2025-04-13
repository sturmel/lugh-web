<template>
  <div class="relative flex flex-col min-h-screen max-w-[100vw] overflow-hidden">
    <NuxtLayout name="main" @scrollTo="scrollToSection">

      <LazyPagesHomeHeroShot class="mb-10" @scrollTo="scrollToSection" />   
      <LazyPagesHomeServices class="mb-10" id="services"/>
      <LazyPagesHomeAbout class="mb-10" @scrollTo="scrollToSection"/>
      <LazyPagesHomeTechnologies class="mb-10" />
      <LazyPagesHomeContact class="mb-10" id="contact" />
 
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const { $gsap: gsap } = useNuxtApp();

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