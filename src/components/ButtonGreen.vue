<template>
  <div class="searching">
    <a class="ButtonRectangle mt-20 ButtonRectangle--green"> {{content}}</a>
  </div>
</template>
<script>
export default {
    props:{
        content:{
            type:String,
            required:true
        },
       
    }
};
</script>
<style scoped>

.searching{
  text-align: left;
  margin-top: 20px;
}
.ButtonRectangle--green.is-hover, .ButtonRectangle--green:hover {
    background-color: rgb(190, 83, 56);
    transform: translateY(-1px);
}
.searching a {
  background-color: rgb(221, 88, 55);
  text-decoration: none;
  color: white;
  font-family: "Metrophobic", sans-serif;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  border-radius: 10px;
  padding: 10px 20px;
  min-width: 140px;
  min-height: 45px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: 250ms;
  box-shadow: 0 5px 15px rgb(221, 88, 55);
}</style>
