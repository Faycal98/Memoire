<template>
  <form class="form">
    <label class="form container" id="upload-container"
      >Cliquez ou Tirez & lachez les fichiers
      
      <div class="img">
        <i class="fa-solid fa-upload"></i>
      </div>
      <input
        class="form file"
        id="upload-files"
        type="file"
        accept="image/*"
        multiple="multiple"
      />
    </label>
    <div class="form files-container" id="files-list-container"></div>
  </form>
</template>
<script>
export default {
  emits: ["updateAlbum"],
  mounted() {
    const INPUT_FILE = document.querySelector("#upload-files");
    const INPUT_CONTAINER = document.querySelector("#upload-container");
    const FILES_LIST_CONTAINER = document.querySelector(
      "#files-list-container"
    );
    let FILE_LIST = [];
    let UPLOADED_FILES = [];

    const multipleEvents = (element, eventNames, listener) => {
      const events = eventNames.split(" ");

      events.forEach((event) => {
        element.addEventListener(event, listener, false);
      });
    };

    const previewImages = () => {
      FILES_LIST_CONTAINER.innerHTML = "";
      if (FILE_LIST.length > 0) {
        FILE_LIST.forEach((addedFile, index) => {
          const content = `
        <div class="form image-container js-remove-image" data-index="${index}">
          <img class="form image" src="${addedFile.url}" alt="${addedFile.name}">
        </div>
      `;

          FILES_LIST_CONTAINER.insertAdjacentHTML("beforeEnd", content);
        });
      } else {
        console.log("empty");
        INPUT_FILE.value = "";
      }
    };

    const fileUpload = () => {
      if (FILES_LIST_CONTAINER) {
        multipleEvents(INPUT_FILE, "click dragstart dragover", () => {
          INPUT_CONTAINER.classList.add("active");
        });

        multipleEvents(INPUT_FILE, "dragleave dragend drop change blur", () => {
          INPUT_CONTAINER.classList.remove("active");
        });

        INPUT_FILE.addEventListener("change", () => {


            const files = [...INPUT_FILE.files];
            console.log(INPUT_FILE.files.length);
            console.log("changed");
            files.forEach((file) => {
              const fileURL = URL.createObjectURL(file);
              const fileName = file.name;
              if (!file.type.match("image/")) {
                alert(file.name + " is not an image");
                console.log(file.type);
              } else {
                const uploadedFiles = {
                  name: fileName,
                  url: fileURL,
                };

                FILE_LIST.push(uploadedFiles);
              }
            });

            FILE_LIST = FILE_LIST.slice(0,5);
            this.photos = FILE_LIST;
            console.log(FILE_LIST, this.photos); //final list of uploaded files
            this.$emit("updateAlbum", this.photos);
            previewImages();

            UPLOADED_FILES = document.querySelectorAll(".js-remove-image");
            removeFile();
          
        });
      }
    };

    const removeFile = () => {
      UPLOADED_FILES = document.querySelectorAll(".js-remove-image");

      if (UPLOADED_FILES) {
        UPLOADED_FILES.forEach((image) => {
          image.addEventListener("click", function () {
            const fileIndex = this.getAttribute("data-index");

            FILE_LIST.splice(fileIndex, 1);
            previewImages();
            removeFile();
          });
        });
      } else {
        [...INPUT_FILE.files] = [];
      }
    };

    fileUpload();
    removeFile();
  },
  data() {
    return {
      photos: [],
    };
  },

  methods: {},
};
</script>
<style>
.img {
  color: rgb(16, 185, 129);
  font-size: 30px;
  margin-left: 7px;
}
.form {
  width: 500px;
  margin: 5% auto;

  &.container {
    position: relative;
    width: 100%;
    height: 200px;

    border: 2px dashed silver;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    color: silver;
    margin-bottom: 5px;

    &.active {
      background-color: rgba(silver);
    }
  }

  &.file {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    cursor: pointer;
    opacity: 0;
  }

  &.files-container {
    display: block;
    width: 100%;
    font-size: 0;
    margin-top: 20px;
  }

  &.image-container {
    display: inline-block;
    width: 49%;
    height: 200px;
    margin-bottom: 10px;
    position: relative;

    &:not(:nth-child(2n)) {
      margin-right: 2%;
    }

    &:after {
      content: "✕";
      position: absolute;
      line-height: 200px;
      font-size: 50px;
      margin: auto;
      top: 0;
      right: 0;
      left: 0;
      text-align: center;
      font-weight: bold;
      color: black;
      background-color: rgba (#000);
      opacity: 0;
      transition: opacity 0.2s ease-in-out;
    }

    &:hover {
      &:after {
        opacity: 1;
        cursor: pointer;
      }
    }
  }

  &.image {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
}
</style>
