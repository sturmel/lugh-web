<template>
    <section class="relative contact w-full flex flex-wrap m-auto mt-0 perspective-[1000px]" ref="contactSection">
        <div class="flex flex-col w-1/2 m-auto ml-0  mb-5 pointer-events-none">
            <h2
                class="contact__title text-transparent text-6xl m-auto ml-0 mb-5 font-bold text-shadow-md text-shadow-white/25">
                Discutons de vos ambitions digitales :</h2>
            <h2
                class="contact__bottomline text-transparent text-4xl  m-auto ml-0 mt-0 mb-5 font-bold text-shadow-md text-shadow-white/25">
                Prêt à donner vie à votre projet web, application, outil métier, ou à optimiser votre sécurité et
                vos processus d'automatisation ?</h2>
            <p
                class="contact__subtitle text-transparent text-xl m-auto ml-0 mt-0 mb-5 text-shadow-md text-shadow-white/25">
                Vous avez une idée brillante pour un site web innovant, une application mobile intuitive, un outil
                métier sur mesure pour booster votre productivité, ou vous souhaitez renforcer la sécurité de votre
                infrastructure digitale et automatiser des tâches chronophages ? Partagez-moi les détails de votre
                projet et vos besoins via le formulaire. Je suis passionné par la transformation digitale
                et je suis impatient de comprendre vos défis et de vous proposer une solution personnalisée et
                performante. Ensemble, nous pouvons concrétiser vos objectifs et faire passer votre activité au
                niveau supérieur.</p>
        </div>

        <div
            class="contact__form flex flex-col items-center  justify-center min-w-[40rem] max-w-1/2  rounded-2xl">

            <form class="flex flex-col items-center justify-center w-full m-auto " @submit.prevent="sendMail">
                <input type="text" placeholder="Nom et prénom"
                    class="contact__form__input text-xl mb-4 w-full shadow-[0.5rem_0.5rem_1rem_rgba(0,0,0,0.15)] border  border-french-gray-500 rounded-lg p-2 bg-white"
                    v-model="name" />
                <input type="email" placeholder="Email"
                    class="contact__form__input text-xl mb-4 w-full shadow-[0.5rem_0.5rem_1rem_rgba(0,0,0,0.15)] border  border-french-gray-500 rounded-lg p-2 bg-white"
                    v-model="email" />
                <input type="text" placeholder="Téléphone"
                    class="contact__form__input text-xl mb-4 w-full shadow-[0.5rem_0.5rem_1rem_rgba(0,0,0,0.15)] border  border-french-gray-500 rounded-lg p-2 bg-white"
                    v-model="phone" />
                <textarea placeholder="Message"
                    class="contact__form__textarea min-h-48 text-xl mb-4 w-full shadow-[0.5rem_0.5rem_1rem_rgba(0,0,0,0.15)] border  border-french-gray-500 rounded-lg p-2 bg-white"
                    v-model="message" />
                <LazyButtonsBlue text="Envoyer votre message" class="m-auto mt-5 !shadow-[0.5rem_0.5rem_1rem_rgba(0,0,0,0.15)]" />
            </form>
        </div>
    </section>
</template>

<script setup lang="ts">
import { showTextSpanEl, hideTextSpanEl } from '~/composables/animations';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { ref, onMounted } from 'vue';

gsap.registerPlugin(ScrollTrigger);

const contactSection = ref<HTMLElement | null>(null);

// Définition des variables avec ref
const name = ref('');
const email = ref('');
const phone = ref('');
const message = ref('');

const sectionVisibilityTrigger = () => {
    if (!contactSection.value) return;
    const title = contactSection.value.querySelector(".contact__title");
    const bottomline = contactSection.value.querySelector(".contact__bottomline");
    const subtitle = contactSection.value.querySelector(".contact__subtitle");

    ScrollTrigger.create({
        trigger: contactSection.value,
        start: 'top 80%',
        end: 'bottom 20%',
        onEnter: () => {
            showTextSpanEl(title as HTMLElement, 0, "#0a369d", "#0a369d");
            showTextSpanEl(bottomline as HTMLElement, 0.5, "#f58a07", "#f58a07");
            showTextSpanEl(subtitle as HTMLElement, 1, "#000000", "#bbb5bd");
        },
        onLeave: () => {
            hideTextSpanEl(title as HTMLElement);
            hideTextSpanEl(bottomline as HTMLElement);
            hideTextSpanEl(subtitle as HTMLElement);
        },
        onEnterBack: () => {
            showTextSpanEl(title as HTMLElement, 0, "#0a369d", "#0a369d");
            showTextSpanEl(bottomline as HTMLElement, 0.5, "#f58a07", "#f58a07");
            showTextSpanEl(subtitle as HTMLElement, 1, "#000000", "#bbb5bd");
        },
        onLeaveBack: () => {
            hideTextSpanEl(title as HTMLElement);
            hideTextSpanEl(bottomline as HTMLElement);
            hideTextSpanEl(subtitle as HTMLElement);
        },
    });
};

const sendMail = () => {
    // Logic to send email
    console.log("Name:", name.value);
    console.log("Email:", email.value);
    console.log("Phone:", phone.value);
    console.log("Message:", message.value);
    // Add your email sending logic here, using the values from name.value, email.value, etc.
};

onMounted(() => {
    sectionVisibilityTrigger();
});
</script>