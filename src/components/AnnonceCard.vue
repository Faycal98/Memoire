<template>
  <div class="d-flex announce-block">
    <GalleryCarrousel :tabImg="imgArray"></GalleryCarrousel>
    <div class="PropertyBlock_content">
      <div class="property">
        
        
        <div class="mb-1">
              <h2 class="Title Title--s mb-10 color-ft-strong">
                Détails du bien
              </h2>
              <div class="row property-container mb-2 mb-0@s">
                <div class="col-12 col-12@s mb-10@s mb-2">
                  <div class="icon-highlight">
                    <div><i class="fa-solid fa-bed"></i></div>
                    <div>
                      <p class="f<!-- t-medium --> location">
                        {{ accomodationDetail.roomNumber }}
                        Chambres
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-12@s mb-2">
                  <div class="icon-highlight">
                    <div><i class="fa-solid fa-kitchen-set"></i></div>
                    <div>
                      <p class="ellipsis-1">
                        {{ accomodationDetail.kitchenNumber }}
                        Cuisines
                      </p>
                    </div>
                  </div>
                </div>

                <div class="col-4 col-12@s mb-4">
                  <div class="icon-highlight">
                    <div><i class="fa-solid fa-shower"></i></div>
                    <div>
                      <p class="ellipsis-1">
                        {{ accomodationDetail.showerNumber }} douche(s)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

      
            </div>
      </div>
    </div>
  </div>
</template>
<script>
import GalleryCarrousel from "./GalleryCarrousel.vue";

export default {
  data() {
    return {
   
    };
  },
  props: {
    imgArray: {
      type: Array,
    },
    accomodationDetail:{
        type:Object
    }
  },
  components: {
    GalleryCarrousel,
  },
};
</script>
<style scoped>

.announce-block{
    background-color:#fff;
    border: 1px solid #f3f3ff;
    border-radius: 12px;
    height: 375px;
    width: fit-content;
    overflow: hidden;
}


.PropertyBlock_content{
    min-width: 520px
}
</style>
