<template>
  <vue-picture-swipe :items="items" ></vue-picture-swipe>
</template>
<script>

export default {
  data() {
    return {
      items: [
        {
          src: "http://localhost:8080/img/porto-novo.1cfd9ec0.jpg",
          thumbnail: "http://localhost:8080/img/porto-novo.1cfd9ec0.jpg",
          w: 600,
          h: 400,
          alt: "some numbers on a grey background", // optional alt attribute for thumbnail image
        },
        {
          src: "http://localhost:8000/uploads/files_1712054088175.jpg",
          thumbnail: "http://localhost:8000/uploads/files_1712054088175.jpg",
          w: 1200,
          h: 900,
          htmlAfterThumbnail: '<span class="photos-date">29.12.2021</span>', // optional, insert your html after tag <a> if you need it
        },
        {
          src: "http://localhost:8000/uploads/files_1712054088175.jpg",
          thumbnail: "http://localhost:8000/uploads/files_1712054088175.jpg",
          w: 1200,
          h: 900,
          htmlAfterThumbnail: '<span class="photos-date">29.12.2021</span>', // optional, insert your html after tag <a> if you need it
        },
        {
          src: "http://localhost:8000/uploads/files_1712054088175.jpg",
          thumbnail: "http://localhost:8000/uploads/files_1712054088175.jpg",
          w: 1200,
          h: 900,
          htmlAfterThumbnail: '<span class="photos-date">29.12.2021</span>', // optional, insert your html after tag <a> if you need it
        },
      ],
    };
  },
};
</script>
<style scoped>

</style>
