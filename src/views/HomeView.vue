<script setup lang="ts">
// TODO: Other vue componet
import { Carousel, Navigation, Slide } from "vue3-carousel";
import 'vue3-carousel/dist/carousel.css';

const settings = {
  itemsToShow: 1,
    snapAlign: 'center',
};

const breakpoints = {
  700: {
    itemsToShow: 3.5,
    snapAlign: 'center',
  },
  // 1024 and up
  1024: {
    itemsToShow: 5,
    snapAlign: 'start',
  },
};
</script>

<template>
  <q-page padding>
    <Carousel :settings="settings" :breakpoints="breakpoints" class="q-ma-lg">
      <Slide v-for="slide in 10" :key="slide">
        <div class="carousel__item">
          <iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_top&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=pablo01e-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B01C4HCV58&linkId=6921975899af99d53f7b0cc66d14a11a"></iframe>
        </div>
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </q-page>
</template>

<style lang="scss">
.carousel__prev {
  background-color: $secondary !important;
}
.carousel__next {
  background-color: $secondary !important;
}
</style>
