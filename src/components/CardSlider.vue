<template>
  <div class="carrousel_slider">
    <Carousel
      :wrap-around="true"

    >
      <Slide v-for="slide in tabImg" :key="slide">
        <div class="carousel__item">
          <img 
          @click="clickImg"
            class="carrou_img"
            :src="require(`@/assets/${slide.src}`)"
            width="100%"
            height="100%"
          />
        </div>
      </Slide>

      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";
//  style="transform: translate3d(0px, -100%, 0px)"
export default defineComponent({
  name: "BasicVue",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  emits:["clickEvent"],
  props: {
    tabImg: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      clicked: false,
    };
  },
  methods: {
    handleInit() {
      console.log("created");
    },
  /*   handleSlideStart(data) {
      this.clicked = true;
      setTimeout(() => {
        this.clicked = false;
      }, 1300);
      console.log("slide-start", data);
    }, */
    clickImg(){
      console.log('5fkfk');

      this.$emit("clickEvent")
    }
  },
});
</script>

<style>
@keyframes example {
  0% {
    transform: translate3d(0px, -100%, 0px);
  }
  100% {
    transform: translate3d(0px, 0px, 0px);
  }
}
.carrousel_slider .carrou_img {
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  min-height: 200px;
}

.carousel__pagination {
  padding: 0;
  margin-top: -9%;
  z-index: 100;
  position: relative;
}
.Carousel_legend {
  font: var(--ft-l);
  font-weight: 700;
  position: absolute;
  height: 60px;
  bottom: 0;
  display: flex;
  align-items: center;
  right: 0;
  color: var(--color-ft-light);
  background-color: rgb(221, 88, 55);
  justify-content: flex-start;
  overflow: hidden;
  padding: 0px 49px;
  min-width: 205px;
}
.carousel__item {
  min-height: 200px;
  width: fit-content;
  color: #ffffff;
  font-size: 20px;
  border-radius: 8px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.Carousel_title {
  margin-bottom: 0;
}

.Carousel_title.animation {
  animation-name: example;
  animation-duration: 1s;
}
.carousel__slide {
  padding: 0px;
}

.carrousel_slider .carousel:hover .carousel__prev,
.carrousel_slider .carousel:hover .carousel__next {
  opacity: 1;
}
.carrousel_slider .carousel__prev,
.carrousel_slider .carousel__next {
  box-sizing: content-box;
  border-radius: 5px;
  opacity: 0;
  border: 3px solid #36417d;
  background: #36417d;
  color: #ffffff;
}
.carousel__prev:hover,
.carousel__next:hover {
  background: #ffffff;
  border: 3px solid #36417d;
  color: #36417d;
}
.carrousel_slider  .carousel__pagination-button::after {
  display: block;
  content: "";
  width: 6px;
  height: 6px;
  border-radius: 50%;

}

.carousel__pagination-button--active:after {
  background-color: black;
}
</style>
