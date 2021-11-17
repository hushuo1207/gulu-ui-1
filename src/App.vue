<template>
  <router-view />
  <!-- <Hushuo/> -->

</template>

<script>
import { ref , provide} from "vue";

export default {
  name: 'App',
  // components: {
  //   Hushuo: Hushuo
  // }
  setup(){
    const width = document.documentElement.clientWidth;
    //console.log(width)

    const menuVisiable = ref(width <= 500 ? false : true);
    provide('menuVisiable', menuVisiable);//set
  },
};
</script>
