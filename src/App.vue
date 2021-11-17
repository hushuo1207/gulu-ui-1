<template>
  <router-view />
  <!-- <Hushuo/> -->

</template>

<script>
import { ref , provide} from 'vue'

export default {
  name: 'App',
  // components: {
  //   Hushuo: Hushuo
  // }
  setup(){
    const menuVisiable = ref(false)
    provide('menuVisiable', menuVisiable)
  }
}
</script>
