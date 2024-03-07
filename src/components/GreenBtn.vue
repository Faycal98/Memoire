<template>
  <div class="searching">
    <a   class="ButtonRectangle mt-20 ButtonRectangle--green"> {{content}}</a>
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
    background-color: #2EB88A;
    transform: translateY(-1px);
    box-shadow: 0 3px 6px 0 rgba(69,97,251,.2);
}
.searching a {
  background-color: #3c9;
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
}</style>
