<template>
    <div class="relative card__service w-80 h-96 bg-white border-2 rounded-xl scale-95" @mouseenter="onMouseEnter"
        @mouseleave="onMouseLeave">
        <div class="backface-hidden w-full h-full  p-4 flex flex-col items-center justify-center rounded-xl">
            <img :src="imageUrl" alt="Lugh Web Logo"
                class="m-auto absolute scale-95 h-48 -top-[5rem] -right-[6rem] object-cover drop-shadow-[0rem_0rem_0.15rem_rgba(0,0,0,0.15)]" />
            <h3
                class="text-2xl m-auto mt-0 mb-0 ml-0 font-semibold text-tangerine-500 uppercase text-shadow-white  h-16 z-10">
                {{ title }}</h3>
            <p class="text-xl m-auto mt-3 z-10"> {{ text }}</p>
            <ButtonsBlueRedirect text="En savoir plus" href="/services"
                class="card__service__button  scale-95 m-auto ml-0 mb-0 z-10 drop-shadow-[0rem_0rem_0.25rem_rgba(0,0,0,0.25)]" />

        </div>
    </div>
</template>

<style lang="sass" scoped>
</style>

<script lang="ts">
import { hexToRgb } from '@/composables/misc'
import gsap from 'gsap';

export default defineComponent({
    props: {
        title: {
            type: String,
            required: true,
        },
        text: {
            type: String,
            required: true,
        },
        hexColor: {
            type: String,
            required: true,
        },
        imageUrl: {
            type: String,
            required: true,
        },
    },
    methods: {
        onMouseEnter() {
            const card = this.$el as HTMLElement;
            const img = this.$el.querySelector('img') as HTMLImageElement;
            const button = this.$el.querySelector('.card__service__button') as HTMLButtonElement;
            gsap.to(card, {
                duration: 0.3,
                scale: 1,
                transform: 'translateZ(0)',
                zIndex: 2,
                boxShadow: '0rem 0rem 2rem rgba(' + hexToRgb(this.hexColor)[0] + ',' + hexToRgb(this.hexColor)[0] + ',' + hexToRgb(this.hexColor)[0] + ', 0.25)',
            });
            gsap.to(img, {
                duration: 0.3,
                scale: 1.05,
                transform: 'translateZ(0)',
                zIndex: 2,
                top: '-5.5rem',
                right: '-6.5rem',
                filter: 'drop-shadow(-0.5rem 0.5rem 0.5rem rgba(0,0,0, 0.25))',
            });
            gsap.to(button, {
                duration: 0.3,
                scale: 1,
                transform: 'translateZ(0)',
                translateX: '0.25rem',
                translateY: '-0.25rem',
                zIndex: 2,
                filter: 'drop-shadow(-0.5rem 0.5rem 0.5rem rgba(0,0,0, 0.25))',
            });
        },
        onMouseLeave() {
            const card = this.$el as HTMLElement;
            const img = this.$el.querySelector('img') as HTMLImageElement;
            const button = this.$el.querySelector('.card__service__button') as HTMLButtonElement;
            gsap.to(card, {
                duration: 0.3,
                scale: 0.95,
                transform: 'translateZ(0)',
                zIndex: 1,
                boxShadow: '0rem 0rem 1rem rgba(' + hexToRgb(this.hexColor)[0] + ',' + hexToRgb(this.hexColor)[0] + ',' + hexToRgb(this.hexColor)[0] + ', 0.25)',
            });
            gsap.to(img, {
                duration: 0.3,
                scale: 0.95,
                transform: 'translateZ(0)',
                zIndex: 1,
                top: '-5rem',
                right: '-6rem',
                filter: 'drop-shadow(0rem 0rem 0.15rem rgba(0,0,0, 0.15))',
            });
            gsap.to(button, {
                duration: 0.3,
                scale: 0.95,
                transform: 'translateZ(0)',
                translateX: '0rem',
                translateY: '0rem',
                zIndex: 1,
                filter: 'drop-shadow(0rem 0rem 0.5rem rgba(0,0,0, 0.25))',
            });
        },
        setColor() {
            const card = this.$el as HTMLElement;
            gsap.set(card, {
                borderColor: this.hexColor,
                boxShadow: '0rem 0rem 1rem rgba(' + hexToRgb(this.hexColor)[0] + ',' + hexToRgb(this.hexColor)[1] + ',' + hexToRgb(this.hexColor)[2] + ', 0.25)',
            });
        }
    },
    mounted() {
        this.setColor();
    },
    watch: {

    },

});
</script>
