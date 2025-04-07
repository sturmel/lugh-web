<template>
    <section class="services flex flex-col items-center justify-center w-full h-full">
        <div class="flex flex-col items-center justify-center w-full h-full mb-14">
            <h2
                class="services__title text-transparent text-6xl m-auto ml-0 mb-5 font-bold text-shadow-md text-shadow-white/25">
                Expertise digitale à votre service : innovons ensemble !</h2>
            <p
                class="services__bottomline text-transparent text-4xl  m-auto ml-0 mt-0 mb-5 font-bold text-shadow-md text-shadow-white/25">
                Propulsez votre activité avec nos services digitaux et construisons votre succès en ligne.</p>
        </div>
        <div class="services__container flex flex-wrap max-w-[1300px] justify-center items-center">
            <div class="services__container__card opacity-0 py-10 px-16">
                <CardService title="Sites web"
                    text="Création de sites web sur mesure, vitrines ou e-commerce, pour une présence en ligne qui reflète votre identité et booste votre activité."
                    imageUrl="/images/pages/home/service_web.webp" redirectUrl="/services/website"
                    hexColor="#bbb5bd" />
            </div>
            <div class="services__container__card opacity-0 py-10 px-16">
                <CardService title="Applications mobiles"
                    text="Conception d'applications mobiles intuitives et performantes, pour iOS et Android, offrant une expérience utilisateur optimale sur tous les supports."
                    imageUrl="/images/pages/home/service_mobile.webp" redirectUrl="/services/website"
                    hexColor="#2ecc71" />
            </div>
            <div class="services__container__card opacity-0 py-10 px-16">
                <CardService title="Outils Métiers"
                    text="Développement d'outils métiers personnalisés pour optimiser vos processus internes, gagner en efficacité et faciliter la gestion de vos données."
                    imageUrl="/images/pages/home/service_outil.webp" redirectUrl="/services/website"
                    hexColor="#3f75f3" />
            </div>
            <div class="services__container__card opacity-0 py-10 px-16">

                <CardService title="Intégration d'automatisation"
                    text="Automatisation de tâches répétitives pour gagner du temps et réduire les erreurs, en intégrant des solutions sur mesure à votre système d'information."
                    imageUrl="/images/pages/home/service_automatisation.webp" redirectUrl="/services/website"
                    hexColor="#3f75f3" />
            </div>
            <div class="services__container__card opacity-0 py-10 px-16">
                <CardService title="Audit de sécurité"
                    text="Analyse approfondie de votre système d'information pour identifier les failles de sécurité et garantir la protection de vos données sensibles."
                    imageUrl="/images/pages/home/service_securite.webp" redirectUrl="/services/website"
                    hexColor="#bbb5bd" />
            </div>
            
        </div>
    </section>
</template>

<script setup lang="ts">
import { animateText } from '~/composables/animations';
import gsap from 'gsap';

const props = defineProps({
    visible: {
        type: Boolean,
        required: true,
        default: false,
    },
});

const setCardPositionAndOpacity = () => {
    const cards = document.querySelectorAll(".services__container__card");
    cards.forEach((card) => {
        gsap.set(card, {
            translateY: "-50%",
        });
    });
};

const cardAppear = () => {
    const cards = document.querySelectorAll(".services__container__card");
    cards.forEach((card, index) => {
        gsap.to(card, {
            duration: 0.7,
            translateY: "0%",
            opacity: 1,
            delay: index * 0.5,
            ease: "power2.out",
        });
    });
};

const resetVisibility = () => {
    const cards = document.querySelectorAll(".services__container__card");
    const title = document.querySelector(".services__title");
    const bottomline = document.querySelector(".services__bottomline");

    cards.forEach((card, index) => {
        gsap.to(card, {
            duration: 0.5,
            translateY: "-50%",
            opacity: 0,
            delay: index * 0.2,
            ease: "power2.out",
        });
    });
    gsap.to(title, {
        duration: 0.5,
        color: "transparent",
    });
    gsap.to(bottomline, {
        duration: 0.5,
        color: "transparent",
    });
};

onMounted(() => {
    setCardPositionAndOpacity();
});

watch(
    () => props.visible,
    (newValue) => {
        if (newValue == true) {
            const el = document.querySelector('.services')
            if (el instanceof HTMLElement) {
                animateText(el, ".services__title", 0, "#0a369d", "#0a369d");
                animateText(el, ".services__bottomline", 1, "#f58a07", "#f58a07");
            }

            cardAppear();
        } else {
            resetVisibility();
        }
    }
);
</script>