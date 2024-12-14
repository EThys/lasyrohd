<!-- eslint-disable @typescript-eslint/ban-ts-comment -->
<script setup lang="ts">
//@ts-ignore
import NavBar from '@/components/homePage/navbar/navHeaderComponent.vue'
//@ts-ignore
import Footer from '@/components/homePage/FooterComponent.vue'
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
  <section data-aos="fade-zoom-in" class="i pg ji bg-purple-800 mt-20">
  <!-- Bg Shape -->
  <img class="h p q" src="../../assets/shape-16.svg" alt="Bg Shape" />

  <div  class="text-center">
    <div class="">
      <div class="">
        <h2 class="fk vj zp pr lk ac ">
          Notre équipe
        </h2>
      </div>
      
    </div>
  </div>
</section>
    <div class="bg-white ">
    <div data-aos="fade-up" class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-pretty py-6 text-4xl font-semibold tracking-tight text-black sm:text-5xl"></h2>
        <p class="max-w-lg text-xl text-black sm:text-4xl font-semibold">Professeurs</p>
      </div>
      <ul role="list" class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4">
        <li>
          <img class="aspect-[14/13] w-full rounded-2xl object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="">
          <h3 class="mt-2 text-lg/8 font-semibold tracking-tight text-white">Herve Kabamba</h3>
          <p class="text-base/7 text-black">Co-Founder / CEO</p>
          <p class="text-sm/6 text-black">Toronto, Canada</p>
        </li>
        <li>
          <img class="aspect-[14/13] w-full rounded-2xl object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="">
          <h3 class="mt-2 text-lg/8 font-semibold tracking-tight text-white">Gabin Mamba</h3>
          <p class="text-base/7 text-black">Co-Founder / CEO</p>
          <p class="text-sm/6 text-black">Kinshasa, DRC</p>
        </li>
      </ul>
    </div>
    <div data-aos="fade-up" class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-pretty py-6 text-4xl font-semibold tracking-tight text-black sm:text-5xl"></h2>
        <p class="max-w-lg text-xl text-black sm:text-4xl font-semibold">Personnel</p>
      </div>
      <ul role="list" class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4">
        <li>
          <img class="aspect-[14/13] w-full rounded-2xl object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="">
          <h3 class="mt-2 text-lg/8 font-semibold tracking-tight text-white">Herve Kabamba</h3>
          <p class="text-base/7 text-black">Co-Founder / CEO</p>
          <p class="text-sm/6 text-black">Toronto, Canada</p>
        </li>
        <li>
          <img class="aspect-[14/13] w-full rounded-2xl object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="">
          <h3 class="mt-2 text-lg/8 font-semibold tracking-tight text-white">Gabin Mamba</h3>
          <p class="text-base/7 text-black">Co-Founder / CEO</p>
          <p class="text-sm/6 text-black">Kinshasa, DRC</p>
        </li>
      </ul>
    </div>
    <div data-aos="fade-up" class="mx-auto max-w-7xl mb-8 px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-pretty py-6 text-4xl font-semibold tracking-tight text-black sm:text-5xl"></h2>
        <p class="max-w-lg text-xl text-black sm:text-4xl font-semibold">Anciens Etudiants</p>
      </div>
      <ul role="list" class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4">
        <li>
          <img class="aspect-[14/13] w-full rounded-2xl object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="">
          <h3 class="mt-2 text-lg/8 font-semibold tracking-tight text-white">Herve Kabamba</h3>
          <p class="text-base/7 text-black">Co-Founder / CEO</p>
          <p class="text-sm/6 text-black">Toronto, Canada</p>
        </li>
        <li>
          <img class="aspect-[14/13] w-full rounded-2xl object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="">
          <h3 class="mt-2 text-lg/8 font-semibold tracking-tight text-white">Gabin Mamba</h3>
          <p class="text-base/7 text-black">Co-Founder / CEO</p>
          <p class="text-sm/6 text-black">Kinshasa, DRC</p>
        </li>
      </ul>
    </div>
  </div>
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
<Footer/>
</template>