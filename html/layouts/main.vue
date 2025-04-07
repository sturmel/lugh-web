<template>
  <div class="w-full flex">
    <NuxtParticles id="mainParticles" :options="options" class="opacity-50 -z-10" />
    <div class="w-full max-w-[1400px] m-auto mt-0 z-10 flex flex-col items-center justify-center">
      <slot />
    </div>
  </div>
</template>



<script setup lang="ts">
import { loadFull } from 'tsparticles'
import { tsParticles } from '@tsparticles/engine'

await loadFull(tsParticles)

const options =
{
  fullScreen: {
    enable: true,
    zIndex: -1
  },
  interactivity: {
    detectsOn: 'window',
    events: {
      onHover: {
        enable: true,
        mode: 'repulse'
      },
      resize: true
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40,
        speed: 3
      },
      push: {
        quantity: 4
      },
      repulse: {
        distance: 150,
        duration: 0.4
      }
    }
  },
  particles: {
    color: {
      value: "transparent"
    },
    move: {
      direction: 'none',
      enable: true,
      outMode: 'bounce',
      random: false,
      speed: 2,
      straight: false
    },
    number: {
      density: {
        enable: true,
        value_area: 800
      },
      value: 150
    },
    links: {
      color: '#000',
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1
    },
    collisions: {
      enable: true
    },
  }
}

</script>