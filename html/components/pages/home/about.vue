<template>
    <section class="relative flex flex-wrap about perspective-[1000px]" @mousemove="imageCardInteraction"
        ref="aboutSection">
        <h2
            class="about__title w-full text-transparent text-6xl m-auto ml-0 mb-5 font-bold text-shadow-md text-shadow-white/25">
            Un parcours unique au service de vos projets.
        </h2>
        <p
            class="about__bottomline w-full text-transparent text-4xl  m-auto ml-0 mt-0 mb-15 font-bold text-shadow-md text-shadow-white/25">
            Une expertise complète et une approche globale pour la réussite durable de vos projets numériques.</p>
        <div class="about__image scale-95 opacity-0 flex h-1/2 max-w-1/3  rounded-2xl bg-emerald-500 m-auto top-0 bottom-0 right-5"
            @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" ref="imageContainer">
            <img src="/images/pages/home/about_jump.webp" alt="Lugh Web Logo"
                class="m-auto h-full object-cover opacity-0 scale-95" ref="imageCharacter" />
        </div>
        <div class="about__container__content w-1/2">
            <div class="about__container__content__text flex flex-col w-full m-auto ml-0 mb-5 pointer-events-none"
                ref="textContent">
                <p class="text-xl mb-10 opacity-0 scale-105">Avec plus de 20 ans dédiés à
                    l'informatique et une expertise forgée dès 2010 dans le monde du Bug Bounty,
                    la cybersécurité est au cœur de mon ADN professionnel. Ce parcours m'a permis de comprendre les
                    systèmes de l'intérieur pour mieux les construire et les protéger.</p>

                <p class="text-xl mb-10 opacity-0 scale-105">J'ai mis cette expertise au service de la création web au
                    fil de diverses
                    expériences : d'abord en tant
                    que freelance, puis en agence, où j'ai pu travailler sur une variété de projets. Mon parcours s'est
                    ensuite enrichi en tant que Directeur Technique (CTO), affinant ma vision stratégique et ma gestion
                    de
                    projets d'envergure. Durant toutes ces étapes, mon objectif est resté constant : réaliser des sites
                    et
                    applications qui excellent en performance, et sécurité, afin de vous
                    fournir
                    des solutions numériques efficaces, durables et sécurisées.
                </p>
                <p class="text-xl mb-10 opacity-0 scale-105">Aujourd'hui de retour en freelance, je mets à profit cette
                    perspective globale
                    unique, combinant
                    expertise technique et vision stratégique acquise, pour donner vie à des projets innovants.
                    Cette approche complète me permet de répondre à vos besoins les plus spécifiques et d'assurer le
                    succès
                    de vos projets digitaux.
                </p>
                <p class="text-xl mb-10 opacity-0 scale-105">Prêt à discuter de votre projet ? Contactez-moi pour
                    explorer comment mon
                    expertise peut faire la
                    différence.</p>
            </div>
            <div class="about__buttons flex flex-wrap items-center justify-center w-full m-auto ml-0 mt-5">
                <ButtonsOrange text="Contactez-moi" @click="emit('scrollTo', 'contact')"
                    class="m-auto ml-0 -translate-y-full opacity-0" />
            </div>
        </div>

    </section>
</template>

<script setup lang="ts">
import { showTextSpanEl, hideTextSpanEl } from '~/composables/animations';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Position {
    height: number;
    width: number;
}

const emit = defineEmits(['scrollTo']);

const isHovered = ref(false);
const aboutSection = ref<HTMLElement | null>(null);
const imageContainer = ref<HTMLElement | null>(null);
const imageCharacter = ref<HTMLImageElement | null>(null);
const textContent = ref<HTMLElement | null>(null);

const imageCardInteraction = (mouseEvent: MouseEvent) => {
    if (!isHovered.value || !imageContainer.value || !imageCharacter.value) return;

    const position: Position = {
        height: imageContainer.value.offsetHeight,
        width: imageContainer.value.offsetWidth,
    };

    const centerX = position.width / 2;
    const centerY = position.height / 2;

    const x = (mouseEvent.offsetX - centerX) / centerX;
    const y = (mouseEvent.offsetY - centerY) / centerY;

    gsap.to(imageContainer.value, {
        duration: 0.5,
        rotateY: `${x * 15}deg`,
        rotateX: `${y * 15 * -1}deg`,
        transform: `translateZ(${y * 2}rem)`,
        boxShadow: `${x * -5}rem ${y * 5}rem 2rem rgba(0, 0, 0, 0.25), ${x * 5}rem ${y * 5}rem 5rem rgba(255, 255, 255, 0.2) inset, ${x * -5}rem ${y * -5}rem 5rem rgba(0, 0, 0, 0.2) inset`,
    });
    gsap.to(imageCharacter.value, {
        duration: 0.5,
        rotateY: `${x * 15}deg`,
        rotateX: `${y * 15 * -1}deg`,
        translateZ: y * 2 + 'rem',
        translateY: `${y * 5}rem`,
        translateX: `${x * 5}rem`,
        filter: `drop-shadow(${x * -5}rem ${y * 5}rem 3rem rgba(0, 0, 0, 0.5))`,

    });
};

const onMouseEnter = () => {
    isHovered.value = true;
};

const onMouseLeave = () => {
    isHovered.value = false;

    if (!imageContainer.value || !imageCharacter.value) return;

    gsap.to(imageContainer.value, {
        duration: 0.5,
        rotateY: `10deg`,
        rotateX: `0deg`,
        transform: `translateZ(0)`,
        boxShadow: `-1rem 1rem 2rem rgba(0, 0, 0, 0.25), 4rem 4rem 5rem rgba(255, 255, 255, 0.2) inset, -4rem -4rem 5rem rgba(0, 0, 0, 0.2) inset`,
    });
    gsap.to(imageCharacter.value, {
        duration: 0.5,
        rotateY: `10deg`,
        rotateX: `0deg`,
        translateZ: '2rem',
        translateY: '2rem',
        translateX: '2rem',
        filter: `drop-shadow(-2rem 2rem 2rem rgba(0, 0, 0, 0.5))`,
    });
};

const imageCardAndButtonAndTextAppear = () => {
    if (!aboutSection.value || !imageContainer.value) return;

    const buttons = aboutSection.value.querySelector(".about__buttons");
    const imageCharacter = aboutSection.value.querySelector(".about__image img");
    const textContent = aboutSection.value.querySelector(".about__container__content__text");

    if (!buttons) return;
    buttons.querySelectorAll("a").forEach((button: HTMLAnchorElement, index: number) => {
        gsap.to(button, {
            duration: 0.5,
            opacity: 1,
            translateY: 0,
            ease: "power1.easeInOut",
            delay: 0.5 + index * 0.5,
        });
    });

    gsap.to(imageContainer.value, {
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
                        rotateY: `10deg`,
                        rotateX: `0deg`,
                        scale: 1,
                        translateZ: '2rem',
                        translateY: '2rem',
                        translateX: '2rem',
                        filter: `drop-shadow(-2rem 2rem 3rem rgba(0, 0, 0, 0.5))`,
                    });
                    gsap.to(imageContainer.value, {
                        duration: 0.5,
                        rotateY: `10deg`,
                        rotateX: `0deg`,
                        scale: 1,
                        transform: `translateZ(0)`,
                        boxShadow: `-1rem 1rem 2rem rgba(0, 0, 0, 0.25), 4rem 4rem 5rem rgba(255, 255, 255, 0.2) inset, -4rem -4rem 5rem rgba(0, 0, 0, 0.2) inset`,
                    });
                },
            });
        },
    });

    if (!textContent) return;
    const paragraph = textContent.querySelectorAll("p");

    paragraph.forEach((p: HTMLParagraphElement, index: number) => {
        gsap.to(p, {
            duration: 0.5,
            opacity: 1,
            scale: 1,
            rotateX: `0deg`,
            translateY: `0rem`,
            delay: 0.5 + index * 0.5,
            ease: "power1.inOut",
        });
    });
};

const imageCardAndButtonAndTextHide = () => {
    if (!aboutSection.value) return;

    const imageContainer = aboutSection.value.querySelector(".about__image");
    const imageCharacter = aboutSection.value.querySelector(".about__image img");
    const buttons = aboutSection.value.querySelector(".about__buttons");
    const title = aboutSection.value.querySelector(".about__title");
    const bottomline = aboutSection.value.querySelector(".about__bottomline");
    const textContent = aboutSection.value.querySelector(".about__container__content__text");

    gsap.to(title, {
        duration: 0.5,
        color: "transparent",
    });
    gsap.to(bottomline, {
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
        scale: 0.95,
        opacity: 0,
        filter: `drop-shadow(0rem 0rem 0rem rgba(0, 0, 0, 0))`,
    });
    gsap.to(imageContainer, {
        duration: 0.5,
        rotateY: `0deg`,
        rotateX: `0deg`,
        scale: 0.95,
        transform: `translateZ(0)`,
        boxShadow: `0rem 0rem 0rem rgba(0, 0, 0, 0), 0rem 0rem 0rem rgba(255, 255, 255, 0) inset, 0rem 0rem 0rem rgba(0, 0, 0, 0) inset`,
    });

    if (!textContent) return;
    const paragraph = textContent.querySelectorAll("p");

    paragraph.forEach((p: HTMLParagraphElement, index: number) => {
        gsap.to(p, {
            duration: 0.5,
            opacity: 0,
            scale: 1.05,
            delay: 0.5 + index * 0.5,
            ease: "power1.inOut",
        });
    });

    if (!buttons) return;
    buttons.querySelectorAll("a").forEach((button: HTMLAnchorElement, index: number) => {
        gsap.to(button, {
            duration: 0.5,
            opacity: 0,
            translateY: "-1rem",
            ease: "power1.easeInOut",
            delay: 0.5 + index * 0.5,
        });
    });

};

const sectionVisibilityTrigger = () => {
    if (!aboutSection.value) return;
    const title = aboutSection.value.querySelector(".about__title");
    const bottomline = aboutSection.value.querySelector(".about__bottomline");

    ScrollTrigger.create({
        trigger: aboutSection.value,
        start: 'top 80%',
        end: 'bottom 20%',
        onEnter: () => {
            imageCardAndButtonAndTextAppear();
            showTextSpanEl(title as HTMLElement, 0, "#0a369d", "#0a369d");
            showTextSpanEl(bottomline as HTMLElement, 0.5, "#f58a07", "#f58a07");
        },
        onLeave: () => {
            imageCardAndButtonAndTextHide();
            hideTextSpanEl(title as HTMLElement);
            hideTextSpanEl(bottomline as HTMLElement);
      
        },
        onEnterBack: () => {
            imageCardAndButtonAndTextAppear();
            showTextSpanEl(title as HTMLElement, 0, "#0a369d", "#0a369d");
            showTextSpanEl(bottomline as HTMLElement, 0.5, "#f58a07", "#f58a07");

        },
        onLeaveBack: () => {
            imageCardAndButtonAndTextHide();
            hideTextSpanEl(title as HTMLElement);
            hideTextSpanEl(bottomline as HTMLElement);
        },
    });

}

onMounted(() => {
    window.addEventListener("mousemove", imageCardInteraction);
    sectionVisibilityTrigger();
});

onBeforeUnmount(() => {
    window.removeEventListener("mousemove", imageCardInteraction);
});
</script>