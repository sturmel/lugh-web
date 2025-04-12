<template>
    <section class="relative contact w-full flex flex-wrap m-auto mt-0 perspective-[1000px]" ref="contactSection">
        <div class="flex flex-col w-full lg:w-1/2 m-auto ml-0  mb-5 pointer-events-none">
            <h2
                class="contact__title text-egyptian-blue-500 blur-[15px] opacity-0 text-5xl lg:text-6xl m-auto ml-0 mb-5 font-bold text-shadow-md text-shadow-white/25">
                Discutons de vos ambitions digitales :</h2>
            <h2
                class="contact__bottomline text-tangerine-500 blur-[15px] opacity-0 text-4xl  m-auto ml-0 mt-0 mb-5 font-bold text-shadow-md text-shadow-white/25">
                Prêt à donner vie à votre projet web, application, outil métier, ou à optimiser votre sécurité et
                vos processus d'automatisation ?</h2>
            <p
                class="contact__subtitle text-black blur-[15px] opacity-0 text-xl m-auto ml-0 mt-0 mb-5 text-shadow-md text-shadow-white/25">
                Vous avez une idée brillante pour un site web innovant, une application mobile intuitive, un outil
                métier sur mesure pour booster votre productivité, ou vous souhaitez renforcer la sécurité de votre
                infrastructure digitale et automatiser des tâches chronophages ? Partagez-moi les détails de votre
                projet et vos besoins via le formulaire.</p>
        </div>

        <div class="contact__form opacity-0 flex flex-col items-center  justify-center w-full lg:w-1/2 max-w-[700px] m-auto lg:p-6 rounded-2xl">

            <form class="flex flex-col items-center justify-center w-full m-auto " @submit.prevent="sendMail">
                <input type="text" placeholder="Nom et prénom"
                    class="contact__form__input text-xl mb-4 w-full shadow-[0.5rem_0.5rem_1rem_rgba(0,0,0,0.15)] border  border-french-gray-500 rounded-lg p-2 bg-white focus:outline-none focus:border-2 focus:border-emerald-500"
                    v-model="name" />
                <input type="email" placeholder="Email"
                    class="contact__form__input text-xl mb-4 w-full shadow-[0.5rem_0.5rem_1rem_rgba(0,0,0,0.15)] border  border-french-gray-500 rounded-lg p-2 bg-white focus:outline-none focus:border-2 focus:border-emerald-500"
                    v-model="email" />
                <input type="text" placeholder="Téléphone"
                    class="contact__form__input text-xl mb-4 w-full shadow-[0.5rem_0.5rem_1rem_rgba(0,0,0,0.15)] border  border-french-gray-500 rounded-lg p-2 bg-white focus:outline-none focus:border-2 focus:border-emerald-500"
                    v-model="phone" />
                <textarea placeholder="Message"
                    class="contact__form__textarea min-h-48 text-xl mb-4 w-full shadow-[0.5rem_0.5rem_1rem_rgba(0,0,0,0.15)] border  border-french-gray-500 rounded-lg p-2 bg-white focus:outline-none focus:border-2 focus:border-emerald-500"
                    v-model="message" />
                <LazyButtonsBlue text="Envoyer votre message"
                    class="m-auto mt-5 !shadow-[0.5rem_0.5rem_1rem_rgba(0,0,0,0.15)]" />
            </form>
        </div>
    </section>
</template>

<script setup lang="ts">
import { showBlurText, hideBlurText, showCardEl, hideCardEl } from '~/composables/animations';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { ref, onMounted } from 'vue';

gsap.registerPlugin(ScrollTrigger);

const contactSection = ref<HTMLElement | null>(null);

const name = ref('');
const email = ref('');
const phone = ref('');
const message = ref('');

const sectionVisibilityTrigger = () => {
    if (!contactSection.value) return;
    const title = contactSection.value.querySelector(".contact__title");
    const bottomline = contactSection.value.querySelector(".contact__bottomline");
    const subtitle = contactSection.value.querySelector(".contact__subtitle");
    const form = contactSection.value.querySelector(".contact__form");

    ScrollTrigger.create({
        trigger: contactSection.value,
        start: 'top 80%',
        end: 'bottom 20%',
        onEnter: () => {
            showBlurText(title as HTMLElement, 0);
            showBlurText(bottomline as HTMLElement, 0.5);
            showBlurText(subtitle as HTMLElement, 1);
            showCardEl(form as HTMLElement);
        },
        onLeave: () => {
            hideBlurText(title as HTMLElement, 0);
            hideBlurText(bottomline as HTMLElement, 0.5);
            hideBlurText(subtitle as HTMLElement, 1);
            hideCardEl(form as HTMLElement);
        },
        onEnterBack: () => {
            showBlurText(title as HTMLElement, 0);
            showBlurText(bottomline as HTMLElement, 0.5);
            showBlurText(subtitle as HTMLElement, 1);
            showCardEl(form as HTMLElement);
        },
        onLeaveBack: () => {
            hideBlurText(title as HTMLElement, 0);
            hideBlurText(bottomline as HTMLElement, 0.5);
            hideBlurText(subtitle as HTMLElement, 1);
            hideCardEl(form as HTMLElement);
        },
    });
};

const sendMail = async () => {
    try {
        const emailData = {
            name: name.value,
            email: email.value,
            phone: phone.value,
            message: message.value,
        };

        const response = await fetch('/api/send_email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(emailData),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Email sent successfully:', data);


        name.value = '';
        email.value = '';
        phone.value = '';
        message.value = '';

    } catch (error: any) {
        console.error('Error sending email:', error.message);

    }
};

onMounted(() => {
    sectionVisibilityTrigger();
    gsap.set(".contact__form", {
            opacity: 0,
            translateY: "25%",
            scale: 1.05,
        });
});
</script>