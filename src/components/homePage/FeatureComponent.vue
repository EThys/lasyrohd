<script setup>
</script>

<template>
  <div class="relative isolate overflow-hidden bg-gray-100 sm:py-10">
    <div class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
      <div class="aspect-[1097/845] w-[68.5625rem]"></div>
    </div>
    <div class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0" aria-hidden="true">
      <div class="aspect-[1097/845] w-[68.5625rem]"></div>
    </div>
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="flex flex-wrap py-3 gap-6">
        <div class="w-full lg:w-10/12 text-center mx-auto mb-5">
          <h2 class="text-5xl font-bold mt-2">How can we  <span class="my-1 inline-block text-5xl border-b-8 border-blue-600 bg-orange-400 px-4 font-bold text-white">help you ?</span></h2>
        </div>
        <div class="w-full lg:w-1/2">
          <div class="flex flex-col space-y-5 mt-6" role="tablist">
            <button class="bg-white border-l-4 border-blue-500 py-6 nav-link active shadow transition-shadow duration-200 ease-in-out hover:shadow-3xl focus:shadow-3xl w-full" id="nav-business-tab" data-bs-toggle="tab" data-bs-target="#nav-business" type="button" role="tab" aria-controls="nav-business" aria-selected="true">
              <h2 class="text-center text-3xl font-bold text-yellow-500">Business Consulting</h2>
              <span class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore</span>
            </button>
            <button class="bg-white border-l-4 border-blue-500 py-6 nav-link active shadow transition-shadow duration-200 ease-in-out hover:shadow-3xl focus:shadow-3xl w-full" id="nav-business-tab" data-bs-toggle="tab" data-bs-target="#nav-business" type="button" role="tab" aria-controls="nav-business" aria-selected="false">
              <h2 class="text-center text-3xl font-bold text-yellow-500">Strategy Planning</h2>
              <span class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore</span>
            </button>
            <button class="bg-white border-l-4 border-blue-500 py-6 nav-link active shadow transition-shadow duration-200 ease-in-out hover:shadow-3xl focus:shadow-3xl w-full" id="nav-business-tab" data-bs-toggle="tab" data-bs-target="#nav-business" type="button" role="tab" aria-controls="nav-business" aria-selected="false">
              <h2 class="text-center text-3xl font-bold text-yellow-500">Video Content</h2>
              <span class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore</span>
            </button>
          </div>
        </div>

        <div class="w-full lg:w-auto"></div>

        <div class="w-full md:w-[45%] mx-auto ">
          <div class="tab-content mt-6 space-y-6"> <!-- Ajout d'un espacement vertical -->
            <div class="tab-pane fade show active" id="nav-business" role="tabpanel" aria-labelledby="nav-intro-tab">
              <img src="../../assets/team7.jpg" class="img-fluid rounded-sm mb-4" alt="">
              <h5 class="mt-4 mb-2 text-xl font-semibold">Introduction to Business Consulting</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore</p>
              <ul class="list-disc list-inside mt-2">
                <li>Helping small businesses</li>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Business Strategy and Management</li>
              </ul>
            </div>

            <div class="tab-pane fade show hidden" id="nav-strategy" role="tabpanel" aria-labelledby="nav-strategy-tab">
              <img src="../../assets/team7.jpg" class="img-fluid rounded-sm mb-4" alt="">
              <h5 class="mt-4 mb-2 text-xl font-semibold">Strategy Planning</h5>
              <div class="flex flex-wrap">
                <div class="w-full lg:w-1/2">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore</p>
                </div>
                <div class="w-full lg:w-1/2">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore</p>
                </div>
              </div>
            </div>

            <div class="tab-pane fade show hidden" id="nav-video" role="tabpanel" aria-labelledby="nav-video-tab">
              <img src="../../assets/team7.jpg" class="img-fluid rounded-lg mb-4" alt="">
              <h5 class="mt-4 mb-2 text-xl font-semibold">Video Content</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Ajoutez ici des styles personnalisés si nécessaire */
</style>