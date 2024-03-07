<template>
  <Carousel
    :wrap-around="true"
    @init="handleInit"
    @slide-start="handleSlideStart"
  >
    <Slide v-for="slide in tabImg" :key="slide">
      <div class="carousel__item">
        <img
          class="carrou_img"
          :src="require(`@/assets/${slide.src}`)"
          width="700px"
          height="360px"
        />
        <div class="Carousel_legend">
          <span class="Icon me-3" style="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="28"
              viewBox="0 0 19 28"
            >
              <path
                fill="#FFF"
                fill-rule="evenodd"
                d="M9.5 13c-1.653 0-3-1.346-3-3s1.347-3 3-3c1.654 0 3 1.346 3 3s-1.346 3-3 3m0-8c-2.757 0-5 2.243-5 5s2.243 5 5 5c2.758 0 5-2.243 5-5s-2.242-5-5-5m0 20.238C6.837 21.283 2 13.313 2 9.5 2 5.364 5.364 2 9.5 2 13.637 2 17 5.364 17 9.5c0 3.813-4.837 11.783-7.5 15.738M9.5 0C4.263 0 0 4.262 0 9.5c0 5.752 8.33 17.577 8.685 18.078a.998.998 0 0 0 1.631 0C10.671 27.077 19 15.252 19 9.5 19 4.262 14.738 0 9.5 0"
              ></path>
            </svg>
          </span>
          <div class="Carousel_titles js-carousel-titles">
            <p :class="[{ animation: clicked }, 'Carousel_title']">
              {{ slide.name }}
            </p>
          </div>
        </div>
      </div>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
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
    handleSlideStart(data) {
      this.clicked = true;
      setTimeout(() => {
        this.clicked = false
      }, 1300)
      console.log("slide-start", data);
    },
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
.carrou_img {
  border-radius: 10px;
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
.Carousel_title{
    margin-bottom: 0;
}

.Carousel_title.animation {
  animation-name: example;
  animation-duration: 1s;

}
.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
    border-radius: 5px;
    border: 3px solid #36417d;
    background: #36417d;
    color: #ffffff;
}
.carousel__prev:hover,.carousel__next:hover{
  background: #ffffff;
  border: 3px solid #36417d; 
  color: #36417d;
}

.carousel__pagination-button::after {
  display: block;
  content: "";
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: var(--vc-pgn-background-color);
}

.carousel__pagination-button--active:after {
  background-color: black;
}
</style>
