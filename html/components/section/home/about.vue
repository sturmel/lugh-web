<template>
    <section class="relative flex flex-wrap about perspective-[1000px]" @mousemove="imageCardInteraction"
        ref="aboutSection">
        <h2
            class="about__title w-full text-5xl lg:text-6xl text-egyptian-blue-500 blur-[15px] opacity-0 m-auto ml-0 mb-5 font-bold text-shadow-md text-shadow-white/25">
            Un parcours unique au service de vos projets.
        </h2>
        <p
            class="about__bottomline w-full text-tangerine-500 blur-[15px] opacity-0 text-4xl  m-auto ml-0 mt-0 mb-15 font-bold text-shadow-md text-shadow-white/25">
            Une expertise complète et une approche globale pour la réussite durable de vos projets numériques.</p>
        <div class="about__image opacity-0 flex w-1/2 max-w-[400px] rounded-2xl bg-emerald-500 m-auto"
            @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" ref="imageContainer">
            <img src="/images/pages/homeAbout.webp" alt="Moi version cartoon 3D entrain de sauter"
                class="m-auto h-full object-cover opacity-0 scale-95" ref="imageCharacter" />
        </div>
        <div class="about__container__content w-full mt-10 md:mt-auto md:w-1/2">
            <div class="about__container__content__text flex flex-col w-full m-auto ml-0 mb-5 pointer-events-none"
                ref="textContent">
                <p class="text-xl mb-10 blur-[15px] opacity-0">Avec plus de 20 ans dédiés à
                    l'informatique et une expertise forgée dès 2010 dans le monde du Bug Bounty,
                    la cybersécurité est au cœur de mon ADN professionnel. Ce parcours m'a permis de comprendre les
                    systèmes de l'intérieur pour mieux les construire et les protéger.</p>

                <p class="text-xl mb-10 blur-[15px] opacity-0">J'ai mis cette expertise au service de la création web au
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
                <p class="text-xl mb-10 blur-[15px] opacity-0">Aujourd'hui de retour en freelance, je mets à profit
                    cette
                    perspective globale
                    unique, combinant
                    expertise technique et vision stratégique acquise, pour donner vie à des projets innovants.
                    Cette approche complète me permet de répondre à vos besoins les plus spécifiques et d'assurer le
                    succès
                    de vos projets digitaux.
                </p>
                <p class="text-xl mb-10 blur-[15px] opacity-0">Prêt à discuter de votre projet ? Me contacter pour
                    explorer comment mon
                    expertise peut faire la
                    différence.</p>
            </div>
            <div class="flex flex-wrap items-center justify-center w-full m-auto ml-0 mt-5">
                <ButtonOrange text="Me contacter" @click="emit('scrollTo', 'contact')"
                    class="about__button m-auto ml-0 -translate-y-full opacity-0" />
            </div>
        </div>

    </section>
</template>

<script setup lang="ts">
import { showBlurText, hideBlurText } from '~/composables/animations';
const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp();

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
        boxShadow: `${x * -2}rem ${y * -2}rem 2rem rgba(0, 0, 0, 0.25), ${x * 5}rem ${y * 5}rem 5rem rgba(255, 255, 255, 0.2) inset, ${x * -5}rem ${y * -5}rem 5rem rgba(0, 0, 0, 0.2) inset`,
    });
    gsap.to(imageCharacter.value, {
        duration: 0.5,
        rotateY: `${x * 15}deg`,
        rotateX: `${y * 15 * -1}deg`,
        translateZ: y * 2 + 'rem',
        translateY: `${y * 5}rem`,
        translateX: `${x * 5}rem`,
        filter: `drop-shadow(${x * -5}rem ${y * -5}rem 5rem rgba(0, 0, 0, 0.5))`,

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
        boxShadow: `-2rem 2rem 2rem rgba(0, 0, 0, 0.25), 5rem 5rem 5rem rgba(255, 255, 255, 0.2) inset, -5rem -5rem 5rem rgba(0, 0, 0, 0.2) inset`,
    });
    gsap.to(imageCharacter.value, {
        duration: 0.5,
        rotateY: `10deg`,
        rotateX: `0deg`,
        translateZ: '2rem',
        translateY: '2rem',
        translateX: '2rem',
        filter: `drop-shadow(-5rem 5rem 5rem rgba(0, 0, 0, 0.5))`,
    });
};

const imageCardAppear = () => {
    if (!aboutSection.value || !imageContainer.value) return;

    const imageCharacter = aboutSection.value.querySelector(".about__image img");

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
                        filter: `drop-shadow(-5rem 5rem 5rem rgba(0, 0, 0, 0.5))`,
                    });
                    gsap.to(imageContainer.value, {
                        duration: 0.5,
                        rotateY: `10deg`,
                        rotateX: `0deg`,
                        scale: 1,
                        transform: `translateZ(0)`,
                        boxShadow: `-2rem 2rem 2rem rgba(0, 0, 0, 0.25), 4rem 4rem 5rem rgba(255, 255, 255, 0.2) inset, -4rem -4rem 5rem rgba(0, 0, 0, 0.2) inset`,
                    });
                },
            });
        },
    });
};


const buttonAppear = () => {
    if (!aboutSection.value || !imageContainer.value) return;
    const button = aboutSection.value.querySelector(".about__button");

    gsap.to(button, {
        duration: 0.5,
        opacity: 1,
        translateY: 0,
        ease: "power1.easeInOut",
        delay: 0.5,
    });
};

const buttonHide = () => {
    if (!aboutSection.value || !imageContainer.value) return;
    const button = aboutSection.value.querySelector(".about__button");

    gsap.to(button, {
        duration: 0.5,
        opacity: 0,
        translateY: "-1rem",
        ease: "power1.easeInOut",
        delay: 0.5,
    });
};

const imageCardHide = () => {
    if (!aboutSection.value) return;

    const imageContainer = aboutSection.value.querySelector(".about__image");
    const imageCharacter = aboutSection.value.querySelector(".about__image img");   

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

};

const textScrollTrigger = (el: HTMLElement) => {
    if (!el) return;
    ScrollTrigger.create({
        trigger: el,
        start: 'top 80%',
        end: 'bottom 20%',
        onEnter: () => {
            showBlurText(el as HTMLElement, 0);
        },
        onEnterBack: () => {
            showBlurText(el as HTMLElement, 0);
        },
        onLeave: () => {
            hideBlurText(el as HTMLElement, 0);
        },
        onLeaveBack: () => {
            hideBlurText(el as HTMLElement, 0);
        }
    });
}

const sectionVisibilityTrigger = () => {
    if (!aboutSection.value) return;
    const imageContainer = aboutSection.value.querySelector(".about__image")
    const title = aboutSection.value.querySelector(".about__title");
    const bottomline = aboutSection.value.querySelector(".about__bottomline");
    const textContent = aboutSection.value.querySelector(".about__container__content__text");
    const button = aboutSection.value.querySelector(".about__button");


    ScrollTrigger.create({
        trigger: imageContainer,
        start: 'top 80%',
        end: 'bottom 20%',
        onEnter: () => {
            imageCardAppear();
        },
        onLeave: () => {
            imageCardHide();
        },
        onEnterBack: () => {
            imageCardAppear();
        },
        onLeaveBack: () => {
            imageCardHide();
        },
    });

    textScrollTrigger(title as HTMLElement);
    textScrollTrigger(bottomline as HTMLElement);

    ScrollTrigger.create({
        trigger: button,
        start: 'top 80%',
        end: 'bottom 20%',
        onEnter: () => {
            buttonAppear();
        },
        onEnterBack: () => {
            buttonAppear();
        },
        onLeave: () => {
            buttonHide();
        },
        onLeaveBack: () => {
            buttonHide();
        }
    });

    if (!textContent) return;
    const paragraph = textContent.querySelectorAll("p");
    paragraph.forEach((p: HTMLParagraphElement, index: number) => {
        ScrollTrigger.create({
            trigger: p,
            start: 'top 80%',
            end: 'bottom 20%',
            onEnter: () => {
                showBlurText(p as HTMLElement, 0 + index * 0.1);
            },
            onEnterBack: () => {
                showBlurText(p as HTMLElement, 0 + index * 0.1);
            },
            onLeave: () => {
                hideBlurText(p as HTMLElement, 0);
            },
            onLeaveBack: () => {
                hideBlurText(p as HTMLElement, 0);
            }
        });
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