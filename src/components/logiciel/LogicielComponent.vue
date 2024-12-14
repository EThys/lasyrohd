<script setup lang="ts">
//@ts-ignore
import NavBar from '@/components/homePage/navbar/navHeaderComponent.vue'
//@ts-ignore
import Footer from '@/components/homePage/FooterComponent.vue'
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
    <div class="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-20">
        <!-- Component -->
        <div class="grid grid-cols-1 items-center gap-8 sm:gap-20 lg:grid-cols-2">
        <!-- Image -->
        <img src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074" alt="" class="inline-block h-full w-full max-w-xl object-cover" />
        <!-- Content -->
        <div class="sm:max-w-sm md:max-w-md lg:max-w-lg">
            <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a9406b0e6cf62_placeholder-logo.svg" alt="" class="mb-4 inline-block" />
            <p class="mb-6 max-w-md text-gray-500 md:mb-10 lg:mb-12"> Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, “Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim.
            <br />
            <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim.”
            </p>
            <p class="font-bold">John Robert</p>
            <p class="text-sm text-gray-500">Senior Webflow Developer</p>
        </div>
        </div>
    </div>
    </section>
    <Footer/>
</template>