<script setup lang="ts">
//@ts-ignore
import NavBar from '@/components/homePage/navbar/navHeaderComponent.vue'
//@ts-ignore
import Footer from '@/components/homePage/FooterComponent.vue'
//@ts-ignore
import Cta from '@/components/homePage/CtaComponent.vue'
import { onMounted } from 'vue';
import 'aos/dist/aos.css'
//@ts-ignore
import AOS from 'aos';

onMounted(() => {
    AOS.init({
    duration: 1000
  });
})

</script>
<template>
<NavBar/>
    <section class="i pg ji bg-purple-800 mt-20">
    <!-- Bg Shape -->
    <img class="h p q" src="../../assets/shape-16.svg" alt="Bg Shape" />

    <div  class="text-center">
        <div class="">
        <div class="">
            <h2 class="fk vj zp pr lk ac ">
            Logiciels
            </h2>
        </div>
        
        </div>
    </div>
    </section>
    <section>
    <!-- Container -->
    <div data-aos="fade-up" class="mx-auto max-w-7xl px-5  md:px-10 ">
        <!-- Component -->
        <div class="grid grid-cols-1 items-center gap-8 sm:gap-20 lg:grid-cols-2">
        <!-- Image -->
            <img src="../../assets/compass.png" alt="" class="inline-block h-full w-full max-w-xl" />
            <!-- Content -->
            <div class="sm:max-w-sm md:max-w-md lg:max-w-lg">
                <h3 class="mb-4 inline-block text-black text-2xl">Trace Compass</h3>
                <p class="font-bold mb-5 text-black">Site web du projet: <span><a href="https://www.eclipse.org/tracecompass/" target="_blank" class="text-blue-500 underline">https://www.eclipse.org/tracecompass/</a></span></p>
                <p class="mb-6 max-w-md text-gray-500 md:mb-10 lg:mb-12">Eclipse Trace Compass est un visualisateur et analyseur de trace. Il supporte plusieurs types de traces, l'aggrégation et synchronization de traces hétérogènes, et possède plusieurs modules et analyses expérimentaux..
                </p>
            </div> 
        </div>
    </div>
    <div data-aos="fade-right" class="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-20">
        <!-- Component -->
        <div class="grid grid-cols-1 items-center gap-8 sm:gap-20 lg:grid-cols-2">
        <!-- Image -->
            <img src="../../assets/lttng.jpeg" alt="" class="inline-block h-full w-full max-w-xl object-cover" />
            <!-- Content -->
            <div class="sm:max-w-sm md:max-w-md lg:max-w-lg">
                <h3 class="mb-4 inline-block text-black text-2xl">LTTng</h3>
                <p class="font-bold mb-5 text-black">Site web du projet: <span><a href="lttng.org" target="_blank" class="text-blue-500 underline">lttng.org</a></span></p>
                <p class="mb-6 max-w-md text-gray-500 md:mb-10 lg:mb-12">Le projet LTTng fournit une suite d'outils open source pour le traçage sous Linux. LTTng fournit un traceur noyau, un traceur de l'espace utilisateur, ainsi qu'un lecteur de trace (babeltrace).
                </p>
            </div> 
        </div>
    </div>
    <div data-aos="fade-up" class="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-20">
        <!-- Component -->
        <div class="grid grid-cols-1 items-center gap-8 sm:gap-20 lg:grid-cols-2">
        <!-- Image -->
            <img src="../../assets/userspace.jpeg" alt="" class="inline-block h-full w-full max-w-xl object-cover" />
            <!-- Content -->
            <div class="sm:max-w-sm md:max-w-md lg:max-w-lg">
                <h3 class="mb-4 inline-block text-black text-2xl">Librairie Userspace RCU</h3>
                <p class="font-bold mb-5 text-black">Site web du projet: <span><a href="http://liburcu.org/" target="_blank" class="text-blue-500 underline">http://liburcu.org/</a></span></p>
                <p class="mb-6 max-w-md text-gray-500 md:mb-10 lg:mb-12">Cette librairie de synchronization de données fournit un accès en lecture qui se met à l'échelle de façon linéaire selon le nombre de coeurs. Plusieurs copies d'une structure de données peuvent exister au même temps. La librairie surveille les accès à la structure de données et détecte une période de grâce après laquelle la mémoire peut être réclamée.
                </p>
            </div> 
        </div>
    </div>
    
    </section>
    <Cta/>
    <Footer/>
</template>