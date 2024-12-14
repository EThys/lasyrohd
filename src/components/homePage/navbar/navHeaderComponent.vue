<!-- eslint-disable @typescript-eslint/ban-ts-comment -->
<script setup lang="ts">
import { ref,onUnmounted, onMounted} from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { useRouter } from 'vue-router'

const router = useRouter()
const mobileMenuOpen = ref(false);
const projectsDropdownOpen = ref(false);
const laboratoryDropdownOpen = ref(false);
const isScrolled = ref(false);

const toggleMobileMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value;
};

const toggleProjectsDropdown = () => {
    projectsDropdownOpen.value = !projectsDropdownOpen.value;
};

const toggleLaboratoryDropdown = () => {
    laboratoryDropdownOpen.value = !laboratoryDropdownOpen.value;
};

const handleScroll = () => {
    isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
 
  const animatedElements = document.querySelectorAll('.fade-in-up');
  animatedElements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add('appear');
    }, index * 300); 
  });
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header class="bg-white fixed top-0 left-0 w-full z-50 transition-shadow duration-300" :class="{ 'shadow-md': isScrolled }" 
  >
    <nav class="mx-auto flex max-w-7xl items-center justify-between lg:px-8" aria-label="Global">
    
      <div class="flex lg:flex-1">
          <a href="#" class="flex items-center whitespace-nowrap text-2xl font-black">
              <span class="mr-2 text-4xl text-blue-500">
                  <img src="../../../assets/LASYRHOD F-B.png" alt="" class="w-32 h-auto">
              </span>
          </a>
      </div>

      <!-- Bouton menu mobile -->
      <div class="flex lg:hidden">
        <button @click="toggleMobileMenu" type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
          <span class="sr-only">Ouvrir le menu principal</span>
          <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>

      <!-- Menu desktop -->
      <div class="hidden lg:flex lg:gap-x-12">
        <a href="#" class="text-sm/6 font-semibold text-gray-900">Accueil</a>
        <!-- Dropdown Projects -->
        <div class="relative">
          <button @click="toggleProjectsDropdown" type="button" class="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
            Recherche
            <svg :class="{ 'rotate-180': projectsDropdownOpen }" class="size-5 flex-none text-gray-400 transition-transform" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
            </svg>
          </button>
        
          <div v-if="projectsDropdownOpen" class="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div class="p-4">
                    <div class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50">
                      <div class="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <svg class="size-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
                          </svg>
                      </div>
                      <div class="flex-auto">
                          <a href="#" class="block font-semibold text-gray-900">
                          Projet encours
                          <span class="absolute inset-0"></span>
                          </a>
                      </div>
                    </div>
                    <div class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50">
                      <div class="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <svg class="size-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59" />
                          </svg>
                      </div>
                      <div class="flex-auto">
                          <a href="#" class="block font-semibold text-gray-900">
                          Projet passés
                          <span class="absolute inset-0"></span>
                          </a>
                      </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="relative">
          <button @click="toggleLaboratoryDropdown" type="button" class="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
            Laboratoire
            <svg :class="{ 'rotate-180': laboratoryDropdownOpen }" class="size-5 flex-none text-gray-400 transition-transform" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
            </svg>
          </button>
        
          <div v-if="laboratoryDropdownOpen" class="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div class="p-4">
                    <div class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50">
                      <div class="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <svg class="size-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
                          </svg>
                      </div>
                      <div class="flex-auto">
                          <a href="#" class="block font-semibold text-gray-900">
                          Equipements
                          <span class="absolute inset-0"></span>
                          </a>
                      </div>
                    </div>
                    <div class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50">
                      <div class="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <svg class="size-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59" />
                          </svg>
                      </div>
                      <div class="flex-auto">
                        <router-link class="block font-semibold text-gray-900" to="/software">
                          Logiciels
                          <span class="absolute inset-0"></span>
                        </router-link>
                      </div>
                    </div>
                    <div class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50">
                      <div class="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <svg class="size-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59" />
                          </svg>
                      </div>
                      <div class="flex-auto">
                        <router-link class="block font-semibold text-gray-900" to="/team">
                          Equipe
                          <span class="absolute inset-0"></span>
                        </router-link>
                      </div>
                    </div>
                    <div class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50">
                      <div class="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <svg class="size-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59" />
                          </svg>
                      </div>
                      <div class="flex-auto">
                          <a href="#" class="block font-semibold text-gray-900">
                         Se joindre a lasyrohd
                          <span class="absolute inset-0"></span>
                          </a>
                      </div>
                    </div>
                </div>
            </div>
        </div>
        <a href="#" class="text-sm/6 font-semibold text-gray-900">Publication</a>

        <!-- <div class="relative">
          <button @click="toggleLaboratoryDropdown" type="button" class="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
            Laboratoire
            <svg :class="{ 'rotate-180': laboratoryDropdownOpen }" class="size-5 flex-none text-gray-400 transition-transform" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
            </svg>
          </button>
          <div v-if="laboratoryDropdownOpen" class="mt-2 space-y-2">
              <a href="#" class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold text-gray-900 hover:bg-gray-50">Équipement</a>
              <a href="#" class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold text-gray-900 hover:bg-gray-50">Logiciels</a>
              <a href="#" class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold text-gray-900 hover:bg-gray-50">Équipes</a>
              <a href="#" class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold text-gray-900 hover:bg-gray-50">Se joindre à LASYROH</a>
          </div>
        </div> -->

        <a href="#" class="text-sm/6 font-semibold text-gray-900">Événements</a>
        <router-link class="text-sm/6 font-semibold text-gray-900" to="/team">
          Collaborateurs
        </router-link>
        <a href="#" class="text-sm/6 font-semibold text-gray-900">Contact</a>
      </div>
    </nav>

    <!-- Menu mobile -->
    <div v-if="mobileMenuOpen" class="lg:hidden">
      <div class="fixed inset-0 z-10 bg-gray-900/50"></div>
      <div class="fixed inset-y-0 right-0 z-20 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">LASYROHD</span>
            <!-- Logo SVG ici -->
          </a>
          <button @click="toggleMobileMenu" type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700">
            <span class="sr-only">Fermer le menu</span>
            <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50">Home</a>
              <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50">About us</a>
              <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50">Team</a>
              
              <!-- Dropdown Projects pour mobile -->
              <div class="-mx-3">
                <button @click="toggleProjectsDropdown" type="button" class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold text-gray-900 hover:bg-gray-50">
                  Recherche
                  <svg :class="{ 'rotate-180': projectsDropdownOpen }" class="size-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                  </svg>
                </button>
                <div v-if="projectsDropdownOpen" class="mt-2 space-y-2">
                  <a href="#" class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold text-gray-900 hover:bg-gray-50">Projet encours</a>
                  <a href="#" class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold text-gray-900 hover:bg-gray-50">Projet passée</a>
                </div>
              </div>

              <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50">Blog</a>
              <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50">Contact</a>
            </div>
            <div class="py-6">
              <a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-gray-900 hover:bg-gray-50">Log in</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<style scoped>
.fade-in-up {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}

.fade-in-up.appear {
  opacity: 1;
  transform: translateY(0);
}
</style>