<!-- eslint-disable @typescript-eslint/ban-ts-comment -->
<script lang="ts" setup>
//@ts-ignore
import Hero from '@/components/homePage/HeroComponent.vue'
//@ts-ignore
import FromBlog from '@/components/homePage/FromBlogComponent.vue'
//@ts-ignore
import AboutUs from '@/components/homePage/AboutUsComponent.vue'
//@ts-ignore
import Testimony from '@/components/homePage/TestimonyComponent.vue'
//@ts-ignore
import Footer from '@/components/homePage/FooterComponent.vue'
//@ts-ignore
import Contact from '@/components/homePage/ContactComponent.vue'
//@ts-ignore
import Counter from '@/components/homePage/CounterComponent.vue'
//@ts-ignore
import Actuality from '@/components/homePage/ActualityComponent.vue'
//@ts-ignore
import Faq from '@/components/homePage/FaqComponent.vue'
import { onMounted } from 'vue';
//@ts-ignore
import AOS from 'aos';

onMounted(() => {
    AOS.init({
    duration: 1000
  });
})

</script>
<template>
    <Hero/>
    <AboutUs data-aos="fade-up"/>
    <Actuality data-aos="fade-up-left"/>
    <FromBlog data-aos="fade-up"/>
    <Contact data-aos="fade-up"/>
    <Faq data-aos="fade-up"/>
    <section class="i pg ji bg-purple-800" data-aos="zoom-in">
        <img class="h p q" src="../assets/shape-16.svg" alt="Bg Shape" />
        <div class="text-center">
          <div class="">
            <div class="">
              <h2 class="fk vj zp pr lk ac ">
                Collaborer avec plus de 60 chercheurs
              </h2>
              <p style="font-size: 20px;line-height: 30px;" class="lk ">
                Entreprise, futur doctorant ou chercheur, contactez-nous pour plus d’informations
              </p>
            </div>
          </div>
        </div>
      </section>
    <Footer />
</template>
<style scoped>
</style>