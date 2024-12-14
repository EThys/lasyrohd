<script lang="ts" setup>
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
    <section data-aos="zoom-in" class="i pg ji bg-purple-800">
        <!-- Bg Shape -->
        <img class="h p q" src="../../assets/shape-16.svg" alt="Bg Shape" />

        <div  class="text-center">
            <div class="">
            <div class="">
                <h2 class="fk vj zp pr lk ac ">
                Collaborer avec plus de 60 chercheurs
                </h2>
                <p style="font-size: 20px;line-height: 30px;" class=" lk ">Entreprise, futur doctorant ou chercheur, contactez nous pour plus d’informations</p>
            </div>
            </div>
        </div>
    </section>
</template>