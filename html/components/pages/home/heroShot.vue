<template>
    <section class="relative heroshot w-full min-h-screen flex flex-wrap m-auto mt-0 perspective-[1000px]">

        <div class="flex flex-col items-center justify-center w-1/2 h-full m-auto ml-0 z-20 ">
            <div class="flex flex-col w-full m-auto ml-0  mb-5 pointer-events-none">
                <h2
                    class="heroshot__title text-transparent text-6xl m-auto ml-0 mb-5 font-bold text-shadow-md text-shadow-white/25">
                    Digitalisez votre succès :</h2>
                <h2
                    class="heroshot__bottomline text-transparent text-4xl  m-auto ml-0 mt-0 mb-5 font-bold text-shadow-md text-shadow-white/25">
                    Sites web & Applications mobiles sur mesure</h2>
                <h1
                    class="heroshot__subtitle text-transparent text-2xl m-auto ml-0 mt-0 mb-5 text-shadow-md text-shadow-white/25">
                    Développement de sites internet, applications mobiles et d'outils métiers. Boostez votre
                    productivité et
                    atteignez vos objectifs avec des solutions personnalisées.</h1>
            </div>   
            <div class="heroshot__buttons flex flex-wrap items-center justify-center w-full m-auto ml-0 mt-5">
                <ButtonsBlueRedirect text="Découvrez mes services" href="/services"
                    class="m-auto ml-0 mr-5 -translate-y-full opacity-0" />
                <ButtonsOrangeRedirect text="Contactez-moi" href="/contact"
                    class="m-auto ml-0 -translate-y-full opacity-0" />
            </div>
        </div>

        <div class="heroshot__image scale-95 opacity-0 flex  absolute h-2/3 max-w-1/2  rounded-2xl bg-egyptian-blue-500 m-auto top-0 bottom-0 right-5"
            @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
            <img src="/images/pages/home/heroshot.webp" alt="Lugh Web Logo"
                class="character m-auto h-full object-cover opacity-0 scale-95" />
        </div>

    </section>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { animateText } from '~/composables/animations'

interface Position {
    height: number;
    width: number;
}

const props = defineProps({
    visible: {
        type: Boolean,
        required: true,
        default: false,
    },
});

const isHovered = ref(false);

const imageCardInteraction = (mouseEvent: MouseEvent) => {
    if (!isHovered.value) return;

    const imageContainer = document.querySelector(".heroshot__image") as HTMLElement;
    const imageCharacter = document.querySelector(".heroshot__image img.character") as HTMLImageElement;

    if (imageContainer && imageCharacter) {
        const position: Position = {
            height: imageContainer.offsetHeight,
            width: imageContainer.offsetWidth,
        };

        const centerX = position.width / 2;
        const centerY = position.height / 2;

        const x = (mouseEvent.offsetX - centerX) / centerX;
        const y = (mouseEvent.offsetY - centerY) / centerY;

        gsap.to(imageContainer, {
            duration: 0.5,
            rotateY: `${x * 15}deg`,
            rotateX: `${y * 15 * -1}deg`,
            transform: `translateZ(${y * 2}rem)`,
            boxShadow: `${x * -5 }rem ${y * -5}rem 2rem rgba(0, 0, 0, 0.25), ${x * 5}rem ${y * 5}rem 5rem rgba(255, 255, 255, 0.2) inset, ${x * -5}rem ${y * -5}rem 5rem rgba(0, 0, 0, 0.2) inset`,
        });
        gsap.to(imageCharacter, {
            duration: 0.5,
            rotateY: `${x * 15}deg`,
            rotateX: `${y * 15 * -1}deg`,
            translateZ: y * 2 + 'rem',
            translateY: `${y * 5}rem`,
            translateX: `${x * 5}rem`,
            filter: `drop-shadow(${x * 2}rem ${y * 2}rem 3rem rgba(0, 0, 0, 0.5))`,

        });
    }
};

const onMouseEnter = () => {
    isHovered.value = true;
};

const onMouseLeave = () => {
    isHovered.value = false;

    const imageContainer = document.querySelector(".heroshot__image");
    const imageCharacter = document.querySelector(".heroshot__image img.character");
    gsap.to(imageContainer, {
        duration: 0.5,
        rotateY: `-10deg`,
        rotateX: `0deg`,
        transform: `translateZ(0)`,
        boxShadow: `1rem 1rem 2rem rgba(0, 0, 0, 0.25), -4rem -4rem 5rem rgba(255, 255, 255, 0.2) inset, 4rem 4rem 5rem rgba(0, 0, 0, 0.2) inset`,
    });
    gsap.to(imageCharacter, {
        duration: 0.5,
        rotateY: `-10deg`,
        rotateX: `0deg`,
        translateZ: '2rem',
        translateY: '1rem',
        translateX: '1rem',
        filter: `drop-shadow(1.75rem 1.75rem 3rem rgba(0, 0, 0, 0.5))`,
    });
};

const imageCardAndButtonAppear = () => {
    const imageContainer = document.querySelector(".heroshot__image");
    const buttons = document.querySelectorAll(".heroshot__buttons");
    const imageCharacter = document.querySelector(".heroshot__image img.character");

    buttons[0].querySelectorAll("a").forEach((button: HTMLAnchorElement, index: number) => {
        gsap.to(button, {
            duration: 0.5,
            opacity: 1,
            translateY: 0,
            ease: "power1.easeInOut",
            delay: 0.5 + index * 0.5,
        });
    });

    gsap.to(imageContainer, {
        duration: 0.5,
        opacity: 1,
        ease: "power1.inOut",
        onComplete: () => {
            gsap.to(imageCharacter, {
                duration: 0.5,
                opacity: 1,
                ease: "power1.inOut",
                onComplete: () => {
                    gsap.to(imageCharacter, {
                        duration: 0.5,
                        rotateY: `-10deg`,
                        rotateX: `0deg`,
                        translateZ: '2rem',
                        translateY: '-1rem',
                        translateX: '-1rem',
                        filter: `drop-shadow(2rem 2rem 3rem rgba(0, 0, 0, 0.5))`,
                    });
                    gsap.to(imageContainer, {
                        duration: 0.5,
                        rotateY: `-10deg`,
                        rotateX: `0deg`,
                        transform: `translateZ(0)`,
                        boxShadow: `-4rem -4rem 2rem rgba(0, 0, 0, 0.25), -4rem -4rem 5rem rgba(255, 255, 255, 0.2) inset, 4rem 4rem 5rem rgba(0, 0, 0, 0.2) inset`,
                    });
                },
            });
        },
    });
};

const resetVisibility = () => {
    const imageContainer = document.querySelector(".heroshot__image");
    const imageCharacter = document.querySelector(".heroshot__image img.character");
    const buttons = document.querySelectorAll(".heroshot__buttons");
    const title = document.querySelector(".heroshot__title");
    const bottomline = document.querySelector(".heroshot__bottomline");
    const subtitle = document.querySelector(".heroshot__subtitle");
    gsap.to(title, {
        duration: 0.5,
        color: "transparent",
    });
    gsap.to(bottomline, {
        duration: 0.5,
        color: "transparent",
    });
    gsap.to(subtitle, {
        duration: 0.5,
        color: "transparent",
    });
    gsap.to(imageCharacter, {
        duration: 0.5,
        rotateY: `0deg`,
        rotateX: `0deg`,
        translateZ: '0rem',
        translateY: '0rem',
        translateX: '0rem',
        opacity: 0,
        filter: `drop-shadow(0rem 0rem 0rem rgba(0, 0, 0, 0))`,
    });
    gsap.to(imageContainer, {
        duration: 0.5,
        rotateY: `0deg`,
        rotateX: `0deg`,
        transform: `translateZ(0)`,
        boxShadow: `0rem 0rem 0rem rgba(0, 0, 0, 0), 0rem 0rem 0rem rgba(255, 255, 255, 0) inset, 0rem 0rem 0rem rgba(0, 0, 0, 0) inset`,
    });
    buttons[0].querySelectorAll("a").forEach((button: HTMLAnchorElement, index: number) => {
        gsap.to(button, {
            duration: 0.5,
            opacity: 0,
            translateY: "-1rem",
            ease: "power1.easeInOut",
            delay: 0.5 + index * 0.5,
        });
    });

};

onMounted(() => {
    window.addEventListener("mousemove", imageCardInteraction);
});

onBeforeUnmount(() => {
    window.removeEventListener("mousemove", imageCardInteraction);
});

watch(
    () => props.visible,
    (newValue) => {
        if (newValue == true) {
            imageCardAndButtonAppear();
            const el = document.querySelector('.heroshot');
            if (el instanceof HTMLElement) {
                animateText(el, ".heroshot__title", 0, "#0a369d", "#0a369d");
                animateText(el, ".heroshot__bottomline", 1, "#0a369d", "#0a369d");
                animateText(el, ".heroshot__subtitle", 2, "#f58a07", "#f58a07");
            }
        } else {
            resetVisibility();
        }
    }
);
</script>