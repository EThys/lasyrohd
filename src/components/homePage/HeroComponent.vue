<!-- eslint-disable @typescript-eslint/ban-ts-comment -->
<script setup lang="ts">
import { onMounted,ref } from "vue";
import { Swiper, SwiperSlide } from 'swiper/vue';
//@ts-ignore
import NavBar from '@/components/homePage/navbar/navHeaderComponent.vue'
import 'swiper/swiper-bundle.css';


const imageList=[
    "hero2.jpg",
    "hero6.jpg",
]
const chemin="src/assets"
const currentIndex = ref(0);
const transitionClass = ref('fade-in');

const changeImage = () => {
    setTimeout(() => {
        currentIndex.value = (currentIndex.value + 1) % imageList.length;
    }, 500); 
};

onMounted(() => {
  setInterval(changeImage, 3000);
 
  const animatedElements = document.querySelectorAll('.fade-in-up');
  animatedElements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add('appear');
    }, index * 300); 
  });
});

</script>
<template>
   <div class="">
  
  <NavBar/>
  <div class="mx-auto fade-in-up h-full px-4 mt-28 mb-12 md:mt-16 py-20 md:py-36 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
    <div   class="flex flex-col items-center justify-between lg:flex-row">
      <div class=" ">
        <div class="lg:max-w-xl lg:pr-5">
          <p class="flex text-sm uppercase text-black">
            <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 inline h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clip-rule="evenodd" />
            </svg>
            Systems Analysis Laboratory
          </p>
          <h2 class="mb-6 max-w-lg text-4xl font-light leading-snug tracking-tight text-black sm:text-7xl sm:leading-snug">
            We Make Your Systems 
            <span class="my-1 inline-block text-5xl border-b-8 border-blue-600 bg-pink-700 px-4 font-bold text-white">Stand Out</span>
          </h2>
          <p class="text-base text-gray-700">Lasyrohd is a laboratory for the analysis of open and highly available distributed systems</p>
        </div>
        <div class="mt-10 flex flex-col items-center md:flex-row">
          <a href="/" class="mb-3 inline-flex h-12 w-full items-center justify-center rounded bg-black px-6 font-medium tracking-wide text-white shadow-md transition hover:bg-blue-800 focus:outline-none md:mr-4 md:mb-0 md:w-auto">Contact us </a>
          <a href="/" aria-label="" class="group inline-flex items-center font-semibold text-black"
            >Watch how it works
            <svg xmlns="http://www.w3.org/2000/svg" class="ml-4 h-6 w-6 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
      <div class="relative hidden lg:ml-32 lg:block lg:w-1/2">
        <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto my-6 h-10 w-10 animate-bounce rounded-full bg-blue-50 p-2 lg:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M16 17l-4 4m0 0l-4-4m4 4V3" />
        </svg>
        <div class="w-fit rounded-[6rem] mx-auto overflow-hidden rounded-tl-none rounded-br-none bg-orange-400">
          <svg xmlns="http://www.w3.org/2000/svg" class="absolute -left-10 -top-20 h-28 w-28 rounded-xl bg-white text-pink-800" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" class="absolute right-0 -bottom-20 h-28 w-28 rounded-xl bg-white text-pink-800" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clip-rule="evenodd" />
          </svg>      
          <img 
                :src="`${chemin}/${imageList[currentIndex]}`" 
                alt="" 
                class="w-full h-auto transition-opacity duration-500" 
                :class="transitionClass" 
            />   
        </div>
      </div>
    </div>
  </div>
</div>
<!-- ===== CTA Start ===== -->
<section class="i pg ji bg-purple-800">
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

      <!-- ===== CTA End ===== -->
</template>
<style scoped>

.mySwiper {
    width: 100%;
    height: auto;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: auto;
}
.fade-in-up {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}

.fade-in-up.appear {
  opacity: 1;
  transform: translateY(0);
}
.slide-in {
  transform: translateY(20px);
  transition: transform 0.5s ease-out, opacity 0.5s ease-out;
}

.slide-in.appear {
  transform: translateY(0);
}

.slide-out {
  transform: translateX(-100%);
  opacity: 0;
  transition: transform 0.5s ease-out, opacity 0.5s ease-out;
}

.swiper-slide img {
  width: 100%;
  height: auto;
}
.swiper {
    width: 400px;
    height: 300px; 
    overflow: visible;
}
</style>