<template>
  <div class="relative flex flex-col min-h-screen max-w-[100vw] overflow-hidden">
    <NuxtLayout name="main">
      <LazyPagesHomeHeroShot class="mb-10"/>
      <LazyPagesHomeServices class="mt-20 mb-10"/>
      <LazyPagesHomeAbout class="mt-20 mb-10" />
      <LazyPagesHomeTechnologies class="mt-20 mb-10" />
      <LazyPagesHomeContact class="mt-20 mb-10"/>
    </NuxtLayout>
  </div>
</template>


<script setup lang="ts">
onMounted(() => {
  window.scrollTo(0, 0);
});
</script>