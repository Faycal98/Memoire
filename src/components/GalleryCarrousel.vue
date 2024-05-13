<template>
  <div class="gallery-wrapper">
    <Carousel
      id="gallery"
      :items-to-show="1"
      :wrap-around="false"
      v-model="currentSlide"
    >
      <Slide v-for="image in tabImg" :key="image">
        <div class="carousel__item">
          <img :src="require(`../../../backend_app/uploads/${image}`)" height="100%" width="100%"/>
        </div>
      </Slide>
    </Carousel>

    <Carousel
      id="thumbnails"
      :items-to-show="4"
      :wrap-around="false"
      v-model="currentSlide"
      ref="carousel"
    >
      <Slide v-for="(image,id) in tabImg" :key="id">
        <div class="carousel__item" @click="slideTo(id)">
            <img :src="require(`../../../backend_app/uploads/${image}`)"  width="100%" height="100%">
        </div>
      </Slide>
    </Carousel>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "Gallery",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data: () => ({
    currentSlide: -1,
  }),
  methods: {
    slideTo(val) {
      this.currentSlide = val;
    },
  },
  props: {
    tabImg: {
      type: Array,
      required: true,
    },
  },
});
</script>
<style scoped>
#gallery .carousel__item {
  height: 300px;
}

.gallery-wrapper {
  width: 340px;
  height: 340px;
}

.carousel * {
  box-sizing: border-box;
}

.carousel__slide {
  padding:0px 3px 0px 0px;
}

.carousel__track {
  display: flex;
  padding: 0 !important;
  position: relative;
  margin-bottom: 0px;
}

#thumbnails .carousel__slide {
  height: 65px;
}
.carousel__item {
  min-height: 100%;
  width: 100%;
  color: #fff;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
