<script setup lang="ts"></script>
<template>

    
<div class="pg fh py-5 sm:py-14">
    <img src="../../assets/shape-13.svg" alt="Shape" class="h r q" />
    <div class="mx-auto max-w-screen-xl px-4 md:px-8">
        <div class="mx-auto max-w-2xl text-center">
            <!-- Title -->
            <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Dernières Actualités</h2>
            <p class="mx-auto max-w-screen-md text-center mb-12 text-gray-500 md:text-lg">Lisez nos articles d'informations pour rester informé des avancées technologiques en matière de systèmes embarqués</p>
        </div>
        <div class="mx-auto w-full max-w-7xl px-3">
            <div class="grid items-center gap-8 sm:gap-20 lg:grid-cols-2">
                <div>
                    <article class="relative isolate flex flex-col justify-end overflow-hidden rounded-lg bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
                        <img src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80" alt="" class="absolute inset-0 -z-10 size-full object-cover">
                        <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                        <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>

                        <div class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm/6 text-gray-300">
                            <time datetime="2020-03-16" class="mr-8">Mar 16, 2020</time>
                            <div class="-ml-4 flex items-center gap-x-4">
                                <svg viewBox="0 0 2 2" class="-ml-0.5 size-0.5 flex-none fill-white/50">
                                <circle cx="1" cy="1" r="1" />
                                </svg>
                                <div class="flex gap-x-2.5">
                                    <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="size-6 flex-none rounded-full bg-white/10">
                                Michael Foster
                                </div>
                            </div>
                        </div>
                    <h3 class="mt-3 text-lg/6 font-semibold text-white">
                    <a href="#">
                        <span class="absolute inset-0"></span>
                        Boost your conversion rate
                    </a>
                    </h3>
                    </article>
                </div>
                
                
                <div>
                    <h2 class="mb-4 max-w-2xl text-black text-3xl pb-4 font-bold md:text-5xl"> Evenement a venir </h2>
                    <div class="bg-purple-800 text-white p-4 rounded-t">
                    <div class="flex justify-between items-center">
                        <div class="text-2xl">11 DEC</div>
                        <div class="text-sm uppercase">Project Presentations</div>
                    </div>
                 </div>
                <div class="bg-white p-8 rounded-b shadow-lg">
                    <div class="mb-6">
                        <p class="text-gray-700 font-semibold">
                            <i class="fas fa-graduation-cap"></i> Défense de thèse du Docteur Oko Elie sur la mise en place d'un systeme de type microservice
                        </p>
                    </div>
                    <div class="flex items-center space-x-4">
                        <p class="text-gray-500 flex items-center">
                            <i class="fas fa-clock"></i>  11h10
                        </p>
                        <span class="text-gray-500">|</span>
                        <p class="text-gray-500 flex items-center">
                            <i class="fas fa-map-marker-alt"></i>  Canada
                        </p>
                        <span class="text-gray-500">|</span>
                        <p class="text-gray-500 flex items-center">
                            <i class="fas fa-comments"></i>  Meet Google
                        </p>
                    </div>   
                </div>
                <div class="mt-8">
                    <a href="#" class="inline-block items-center hover:bg-black rounded-sm bg-purple-800 px-6 py-3 text-center font-semibold text-white">Plus d'événement </a>
                </div>
            </div>
            </div>
        </div>
    </div>
</div>

</template>