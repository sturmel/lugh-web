<template>
    <nav class="navigation fixed top-0 left-0 w-full h-16 bg-white/25 backdrop-blur-3xl border-b border-french-gray-500 shadow-[0rem_0rem_1rem_rgba(0,0,0,0.15)] z-50 flex items-center justify-between px-4">
        <p>LUGH WEB</p>
        {{ position }}
        <LazyHamburger :position="position" @click="toggleMenu" />
</nav>
</template>

<script setup lang="ts">


const position = ref('close');
const toggleMenu = () => {
    position.value = position.value === 'close' ? 'open' : 'close';
};

</script>