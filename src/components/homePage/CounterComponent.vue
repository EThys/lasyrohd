<script setup lang="ts">
import { ref, onMounted } from 'vue';

interface CounterItem {
  value: number;
  target: number;
  text: string;
}

const counterItems = ref<CounterItem[]>([
  { value: 0, target: 785, text: "Systems Analyzed" },
  { value: 0, target: 533, text: "Satisfied Clients" },
  { value: 0, target: 865, text: "Scientific Publications" },
  { value: 0, target: 346, text: "Patents Filed" }
]);

const animateCounter = (item: CounterItem) => {
  const duration = 15000; 
  const steps = 60;
  const stepValue = item.target / steps;
  const stepDuration = duration / steps;

  const timer = setInterval(() => {
    item.value += stepValue;
    if (item.value >= item.target) {
      item.value = item.target;
      clearInterval(timer);
    }
  }, stepDuration);
};

onMounted(() => {
  counterItems.value.forEach(animateCounter);
});
</script>

<template>
  <section class="i pg qh rm ji hp">
    <img src="../../assets/shape-11.svg" alt="Shape" class="of h ga ha ke" />
    <img src="../../assets/shape-07.svg" alt="Shape" class="h ia o ae jf" />
    <img src="../../assets/shape-14.svg" alt="Shape" class="h ja ka" />
    <img src="../../assets/shape-15.svg" alt="Shape" class="h q p" />

    <div class="bb ze i va ki xn br">
      <div class="text-black tc uf sn tn xf un gg">
        <div v-for="item in counterItems" :key="item.text" class="animate_top me/5 ln rj">
          <h2 class="gk vj zp or kk wm hc">{{ Math.round(item.value) }}</h2>
          <p class="ek bk aq">{{ item.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>