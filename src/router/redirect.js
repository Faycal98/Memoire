import store from "@/store";
export default (to, from, next) => {
    if (store.state.isLogged) {
      next("/");
      
    } else {
      next();
   
    }
  };
  