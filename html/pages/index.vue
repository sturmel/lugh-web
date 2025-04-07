<template>
  <div class="relative flex flex-col min-h-screen max-w-[100vw] overflow-hidden">
    <NuxtLayout name="main">  

     <PagesHomeHeroShot id="hero-shot" :visible="visibleSectionId == 'hero-shot'" />
      <PagesHomeServices id="services" :visible="visibleSectionId == 'services'" />

      <PagesHomeAbout id="about" :visible="visibleSectionId == 'about'" />
     
    </NuxtLayout>
  </div>
</template>


<script setup lang="ts">
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const visibleSectionId = ref<string | null>(null);

onMounted(() => {
  window.scrollTo(0, 0);

  const sections = ['hero-shot', 'services', 'about'];

  sections.forEach((id) => {
    const element = document.getElementById(id);
    if (element) {
      ScrollTrigger.create({
        trigger: element,
        start: 'top 70%', // Adjust as needed
        end: 'bottom 30%', // Adjust as needed
        onEnter: () => {
          visibleSectionId.value = id;
        },
        onEnterBack: () => {
          visibleSectionId.value = id;
        },
        onLeave: () => {
        /*  if (visibleSectionId.value === id) {
            visibleSectionId.value = null;
          }*/
        },
        onLeaveBack: () => {
         /* if (visibleSectionId.value === id) {
            visibleSectionId.value = null;
          }*/
        },
        markers: true, // For debugging
      });
    }
  });
});
</script>