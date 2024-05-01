<template>
  <div class="wrapper position-relative">
    <lightgallery
      :settings="{ speed: 500, plugins: plugins }"
      :onInit="onInit"
      :onBeforeSlide="onBeforeSlide"
    >
      <a
        v-for="img in imgArray"
        class="gallery-item"
        :key="img"
            :data-lg-size="1400-800"
        :data-src="`http://localhost:8000/uploads/${img}`"
      >
        <img
          class="img-responsive"
          height="300"
          width="340"
          :src="`http://localhost:8000/uploads/${img}`"
        />
      </a>

      <!-- 
      <a
        class="gallery-item"
        data-video='{"source": [{"src":"https://www.lightgalleryjs.com/videos/video1.mp4", "type":"video/mp4"}], "attributes": {"preload": false, "controls": true}}'
        data-poster=""
        data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@katherine_xx11' >Katherine Gu </a></h4><p> For all those years we were alone and helpless.</p>"
      >
        <img
          width="400"
          height="300"
          class="img-responsive"
          src="https://www.lightgalleryjs.com/images/demo/html5-video-poster.jpg"
        />
      </a> -->
    </lightgallery>
  </div>
</template>

<script>
import Lightgallery from "lightgallery/vue";
import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";

export default {
  name: "pVue",
  components: {
    Lightgallery,
  },
  data: () => ({
    plugins: [lgZoom, lgVideo],
  }),
  props: {
    imgArray: {
      type: Array,
    },
  },
  methods: {
    onInit: () => {
      console.log("lightGallery has been initialized");
    },
    onBeforeSlide: () => {
      console.log("calling before slide");
    },
  },
};
</script>
<style>
@import url("https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.4/css/lightgallery.css");
@import url("https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.4/css/lg-zoom.css");
@import url("https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.4/css/lg-video.css");
body {
  margin: 0;
}
.gallery-item {
  cursor: pointer;
  margin: 5px;
}
</style>
