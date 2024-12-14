<script setup lang="ts">
import { ref } from 'vue';

    const faqs = ref([
    {
      question: "Comment Lasyrohd se distingue-t-il des autres laboratoires sur le marché ?",
      answer: "Lasyrohd se démarque par son approche spécialisée dans l'analyse des systèmes distribués ouverts et hautement disponibles. Notre équipe d'experts utilise des méthodes avancées et des outils de pointe pour fournir des diagnostics précis et des solutions personnalisées, garantissant ainsi une optimisation supérieure des performances des infrastructures.",
      isOpen:false
    },
    {
      "question": "Quelle est votre politique concernant la distribution des ressources de Lasyrohd ?",
      "answer": "Notre politique vise à assurer une distribution équitable et responsable des ressources de Lasyrohd. Nous nous engageons à respecter les normes éthiques et à garantir que toutes les parties prenantes bénéficient de nos analyses et recommandations.",
      isOpen:false
    },
    {
      "question": "Comment puis-je contribuer aux travaux de Lasyrohd ?",
      "answer": "Vous pouvez contribuer en partageant vos idées, en participant à nos discussions communautaires ou en rejoignant nos projets collaboratifs. Votre contribution est précieuse pour enrichir notre recherche et améliorer nos services.",
      isOpen:false
    },
    {
      "question": "Quels autres services proposez-vous chez Lasyrohd ?",
      "answer": "En plus de l'analyse des systèmes distribués, Lasyrohd propose une gamme de services incluant des diagnostics sur mesure, des formations spécialisées et un accompagnement dans la mise en œuvre de solutions optimisées pour améliorer la performance des infrastructures.",
      isOpen:false
    },
    {
      "question": "Quels types de diagnostics proposez-vous ?",
      "answer": "Nous offrons divers diagnostics adaptés aux besoins spécifiques de nos clients, incluant l'évaluation de la disponibilité des systèmes, l'analyse de la performance réseau, ainsi que l'identification des points faibles dans les infrastructures distribuées.",
      isOpen:false
    }
    ]);

    const toggle = (index:number) => {
      faqs.value[index].isOpen = !faqs.value[index].isOpen;
    };

</script>


<template>
    <section>
      <div class="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-5 py-16 md:px-10 md:py-20">
        <div class="mx-auto flex max-w-xl flex-col items-center justify-center px-6 text-center lg:max-w-3xl lg:px-10">
          <h1 class="mx-auto text-center font-bold text-black lg:text-3xl ">As-tu des questions ?</h1>
        </div>
        <div class="mt-10 flex w-full max-w-4xl flex-col">
          <div v-for="(faq, index) in faqs" :key="index" class="relative my-3 w-full rounded-md border border-gray-300 px-12 py-8">
            <div class="max-w-3xl">
              <h2 @click="toggle(index)" class="cursor-pointer font-bold text-black text-xl">{{ faq.question }}</h2>
              <p v-if="faq.isOpen" class="font-inter mt-4 text-base font-light text-gray-500">{{ faq.answer }}</p>
            </div>
            <a @click.prevent="toggle(index)" class="absolute right-5 top-9 cursor-pointer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="12" fill="white"></circle>
                <path v-if="faq.isOpen" d="M7.05078 12H16.9508" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                <path v-if="faq.isOpen" d="M12 7.05005V16.95" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                <path v-else d="M7.04688 11.9999H16.9469" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  </template>
  
 
  <style scoped>
  .cursor-pointer {
    cursor: pointer;
  }
  </style>
  