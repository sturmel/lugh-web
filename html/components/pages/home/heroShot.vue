<template>
    <section class="relative heroshot w-full h-[calc(100vh-8rem)] min-h-[600px] flex flex-wrap-reverse md:flex-wrap m-auto mt-0 perspective-[1000px]"
        @mousemove="imageCardInteraction" ref="heroShotSection">

        <div class="flex flex-col items-center justify-center w-full mt-10 md:mt-auto md:w-1/2 h-full m-auto ml-0 z-20">
            <div class="relative flex flex-col w-full m-auto ml-0  mb-5 pointer-events-none">
                <h3
                    class="heroshot__title text-5xl lg:text-6xl text-egyptian-blue-500 blur-[15px] opacity-0 m-auto ml-0 mb-5 font-bold text-shadow-md text-shadow-white/25">
                    Digitalisez votre succès :</h3>
                <h1
                    class="heroshot__bottomline text-4xl text-egyptian-blue-500 blur-[15px] opacity-0 m-auto ml-0 mt-0 mb-5 font-bold text-shadow-md text-shadow-white/25">
                    Sites web, applications mobiles & outils métiers sur mesure</h1>
                <h2
                    class="heroshot__subtitle text-2xl text-tangerine-500 blur-[15px] opacity-0 m-auto ml-0 mt-0 mb-5 text-shadow-md text-shadow-white/25">
                    Développons ensemble votre présence en ligne, vos outils de productivité, sécurisons votre infrastructure et automatisons vos processus.</h2>
            </div>
            <div class="flex flex-col lg:flex-row items-center justify-center w-full m-auto ml-0 mt-5">
                <ButtonsBlue text="Découvrez mes services" @click="$emit('scrollTo', 'services')"
                    class="heroshot__button m-auto ml-0 lg:mr-5 -translate-y-full opacity-0" />
                <ButtonsOrange text="Me contacter" @click="$emit('scrollTo', 'contact')"
                    class="heroshot__button m-auto mt-5 ml-0 lg:mt-auto  -translate-y-full opacity-0" />
            </div>
        </div>
        <div class="heroshot__image scale-95 opacity-0 flex w-1/2 max-w-[550px] rounded-2xl bg-egyptian-blue-500 m-auto"
            @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" ref="imageContainer">
            <img src="/images/pages/home/heroshot.webp" alt="Mascote de l'agence qui saute" 
                class="character m-auto h-full object-cover opacity-0 scale-95" ref="imageCharacter" />
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
const heroShotSection = ref<HTMLElement | null>(null);
const imageContainer = ref<HTMLElement | null>(null);
const imageCharacter = ref<HTMLImageElement | null>(null);

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
        boxShadow: `${x * -2}rem ${y * -2}rem 1rem rgba(0, 0, 0, 0.25), ${x * 4}rem ${y * 4}rem 5rem rgba(255, 255, 255, 0.2) inset, ${x * -4}rem ${y * -4}rem 5rem rgba(0, 0, 0, 0.2) inset`,
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
        rotateY: `-10deg`,
        rotateX: `0deg`,
        transform: `translateZ(0)`,
        boxShadow: `1rem 1rem 2rem rgba(0, 0, 0, 0.25), -4rem -4rem 5rem rgba(255, 255, 255, 0.2) inset, 4rem 4rem 5rem rgba(0, 0, 0, 0.2) inset`,
    });
    gsap.to(imageCharacter.value, {
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
    if (!imageContainer.value || !heroShotSection.value) return;
    
    const buttons = heroShotSection.value.querySelectorAll(".heroshot__button");
    const imageCharacter = heroShotSection.value.querySelector(".heroshot__image img.character");


    buttons.forEach((button, index: number) => {  
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
                    gsap.to(imageContainer.value, {
                        duration: 0.5,
                        rotateY: `-10deg`,
                        rotateX: `0deg`,
                        scale: 1,
                        transform: `translateZ(0)`,
                        boxShadow: `2rem 2rem 1rem rgba(0, 0, 0, 0.25), -4rem -4rem 5rem rgba(255, 255, 255, 0.2) inset, 4rem 4rem 5rem rgba(0, 0, 0, 0.2) inset`,
                    });
                    gsap.to(imageCharacter, {
                        duration: 0.5,
                        rotateY: `-10deg`,
                        rotateX: `0deg`,
                        translateZ: '2rem',
                        translateY: '-1rem',
                        translateX: '-1rem',
                        scale: 1,
                        filter: `drop-shadow(5rem 5rem 5rem rgba(0, 0, 0, 0.5))`,
                    });

                },
            });
        },
    });
};

const imageCardAndButtonHide = () => {
    if (!heroShotSection.value) return;

    const imageContainer = heroShotSection.value.querySelector(".heroshot__image");
    const imageCharacter = heroShotSection.value.querySelector(".heroshot__image img.character");
    const buttons = heroShotSection.value.querySelectorAll(".heroshot__button");

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
    buttons.forEach((button, index: number) => {  
        gsap.to(button, {
            duration: 0.5,
            opacity: 0,
            translateY: "-1rem",
            ease: "power1.easeInOut",
            delay: 0.5 + index * 0.5,
        });
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
    if (!heroShotSection.value || !imageContainer.value) return;
    const buttons = heroShotSection.value.querySelectorAll(".heroshot__button");
    const title = heroShotSection.value.querySelector(".heroshot__title");
    const bottomline = heroShotSection.value.querySelector(".heroshot__bottomline");
    const subtitle = heroShotSection.value.querySelector(".heroshot__subtitle");

    ScrollTrigger.create({
        trigger: imageContainer.value,
        start: 'top 80%',
        end: 'bottom 20%',
        onEnter: () => {
            imageCardAndButtonAppear();
        },
        onLeave: () => {
            imageCardAndButtonHide();

        },
        onEnterBack: () => {
            imageCardAndButtonAppear();
        },
        onLeaveBack: () => {
            imageCardAndButtonHide();
        },
    });

    textScrollTrigger(title as HTMLElement);
    textScrollTrigger(bottomline as HTMLElement);
    textScrollTrigger(subtitle as HTMLElement);

    buttons.forEach((button, index: number) => {
        ScrollTrigger.create({
            trigger: button,
            start: 'top 80%',
            end: 'bottom 20%',
            onEnter: () => {
                gsap.to(button, {
                    duration: 0.5,
                    opacity: 1,
                    translateY: 0,
                    ease: "power1.easeInOut",
                    delay: 0.5 + index * 0.5,
                });
            },
            onLeaveBack: () => {
                gsap.to(button, {
                    duration: 0.5,
                    opacity: 0,
                    translateY: "-1rem",
                    ease: "power1.easeInOut",
                    delay: 0.5 + index * 0.5,
                });
            },
            onLeave: () => {
                gsap.to(button, {
                    duration: 0.5,
                    opacity: 0,
                    translateY: "-1rem",
                    ease: "power1.easeInOut",
                    delay: 0.5 + index * 0.5,
                });
            },
            onEnterBack: () => {
                gsap.to(button, {
                    duration: 0.5,
                    opacity: 1,
                    translateY: 0,
                    ease: "power1.easeInOut",
                    delay: 0.5 + index * 0.5,
                });
            },
        });
    });

};

onMounted(() => {
    window.addEventListener("mousemove", imageCardInteraction);
    sectionVisibilityTrigger();
});

onBeforeUnmount(() => {
    window.removeEventListener("mousemove", imageCardInteraction);
});
</script>