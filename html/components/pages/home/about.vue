<template>
    <section class="relative flex flex-wrap about perspective-[1000px]">
        <h2
            class="about__title w-full text-transparent text-6xl m-auto ml-0 mb-5 font-bold text-shadow-md text-shadow-white/25">
            Un parcours unique au service de vos projets.
        </h2>
        <p
            class="about__bottomline w-full text-transparent text-4xl  m-auto ml-0 mt-0 mb-15 font-bold text-shadow-md text-shadow-white/25">
            Une expertise complète et une approche globale pour la réussite durable de vos projets numériques.</p>
        <div class="about__image scale-95 flex h-1/2 max-w-1/3  rounded-2xl bg-emerald-500 m-auto top-0 bottom-0 right-5"
            @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
            <img src="/images/pages/home/about_jump.webp" alt="Lugh Web Logo"
                class="m-auto h-full object-cover opacity-0 scale-95" />
        </div>
        <div class="about__container__content w-1/2">


            <p class="text-xl mb-10">Avec plus de 20 ans dédiés à l'informatique et une expertise forgée dès 2010 dans le monde du Bug Bounty,
                la cybersécurité est au cœur de mon ADN professionnel. Ce parcours d'autodidacte et d'expert en sécurité
                m'a permis de comprendre les systèmes de l'intérieur pour mieux les construire et les protéger.</p>

                <p class="text-xl mb-10">J'ai mis cette expertise au service de la création web au fil de diverses expériences : d'abord en tant
                que freelance, puis en agence, où j'ai pu travailler sur une variété de projets. Mon parcours s'est
                ensuite enrichi en tant que Directeur Technique (CTO), affinant ma vision stratégique et ma gestion de
                projets d'envergure. Durant toutes ces étapes, mon objectif est resté constant : réaliser des sites et
                applications qui excellent en performance, sécurité, design et impact écologique, afin de vous fournir
                des solutions numériques efficaces, durables et sécurisées.
            </p>
            <p class="text-xl mb-10">Aujourd'hui de retour en freelance, je mets à profit cette perspective globale unique, combinant
                expertise technique pointue et vision stratégique acquise, pour donner vie à des projets innovants.
                Cette approche complète me permet de répondre à vos besoins les plus spécifiques et d'assurer le succès
                de vos projets digitaux.
            </p>
            <p class="text-xl mb-10">Prêt à discuter de votre projet ? Contactez-moi pour explorer comment mon expertise peut faire la
                différence.</p>
            <div class="about__buttons flex flex-wrap items-center justify-center w-full m-auto ml-0 mt-5">
                <ButtonsBlueRedirect text="Découvrez mes services" href="/services"
                    class="m-auto ml-0 mr-5 -translate-y-full opacity-0" />
                <ButtonsOrangeRedirect text="Contactez-moi" href="/contact"
                    class="m-auto ml-0 -translate-y-full opacity-0" />
            </div>

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

    const imageContainer = document.querySelector(".about__image") as HTMLElement;
    const imageCharacter = document.querySelector(".about__image img") as HTMLImageElement;

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
            boxShadow: `${x * -3}rem ${y * 3}rem 2rem rgba(0, 0, 0, 0.25), ${x * 5}rem ${y * 5}rem 5rem rgba(255, 255, 255, 0.2) inset, ${x * -5}rem ${y * -5}rem 5rem rgba(0, 0, 0, 0.2) inset`,
        });
        gsap.to(imageCharacter, {
            duration: 0.5,
            rotateY: `${x * 15}deg`,
            rotateX: `${y * 15 * -1}deg`,
            translateZ: y * 2 + 'rem',
            translateY: `${y * 5}rem`,
            translateX: `${x * 5}rem`,
            filter: `drop-shadow(${x * 2 * -1}rem ${y * 2 * -1}rem 3rem rgba(0, 0, 0, 0.5))`,

        });
    }
};

const onMouseEnter = () => {
    isHovered.value = true;
};

const onMouseLeave = () => {
    isHovered.value = false;

    const imageContainer = document.querySelector(".about__image");
    const imageCharacter = document.querySelector(".about__image img");
    gsap.to(imageContainer, {
        duration: 0.5,
        rotateY: `10deg`,
        rotateX: `0deg`,
        transform: `translateZ(0)`,
        boxShadow: `-1rem 1rem 2rem rgba(0, 0, 0, 0.25), 4rem 4rem 5rem rgba(255, 255, 255, 0.2) inset, -4rem -4rem 5rem rgba(0, 0, 0, 0.2) inset`,
    });
    gsap.to(imageCharacter, {
        duration: 0.5,
        rotateY: `10deg`,
        rotateX: `0deg`,
        translateZ: '2rem',
        translateY: '1rem',
        translateX: '1rem',
        filter: `drop-shadow(2rem 2rem 2rem rgba(0, 0, 0, 0.5))`,
    });
};

const imageCardAndButtonAppear = () => {
    const imageContainer = document.querySelector(".about__image");
    const buttons = document.querySelectorAll(".about__buttons");
    const imageCharacter = document.querySelector(".about__image img");

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
                        rotateY: `10deg`,
                        rotateX: `0deg`,
                        translateZ: '2rem',
                        translateY: '-1rem',
                        translateX: '-1rem',
                        filter: `drop-shadow(2rem 2rem 3rem rgba(0, 0, 0, 0.2))`,
                    });
                    gsap.to(imageContainer, {
                        duration: 0.5,
                        rotateY: `10deg`,
                        rotateX: `0deg`,
                        transform: `translateZ(0)`,
                        boxShadow: `-1rem 1rem 2rem rgba(0, 0, 0, 0.25), 4rem 4rem 5rem rgba(255, 255, 255, 0.2) inset, -4rem -4rem 5rem rgba(0, 0, 0, 0.2) inset`,
                    });
                },
            });
        },
    });
};

const resetVisibility = () => {
    const imageContainer = document.querySelector(".about__image");
    const imageCharacter = document.querySelector(".about__image img");
    const buttons = document.querySelectorAll(".about__buttons");
    const title = document.querySelector(".about__title");
    const bottomline = document.querySelector(".about__bottomline");

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
            const el = document.querySelector('.about');
            if (el instanceof HTMLElement) {
                animateText(el, ".about__title", 0, "#0a369d", "#0a369d");
                animateText(el, ".about__bottomline", 1, "#f58a07", "#f58a07");
            }
        } else {
            //    resetVisibility();
        }
    }
);
</script>