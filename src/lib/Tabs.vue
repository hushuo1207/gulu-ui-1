<template>
    <div class="gulu-tabs">
    <div class="gulu-tabs-nav" ref="container">
        <div class="gulu-tabs-nav-item" v-for="(t,index) in titles" :key="index"
        :ref="el => {if ( t == selected) selectedItem = el}"
        :class="{selected: t == selected}" @click="select(t)">{{t}}</div>
        
    <div class="gulu-tabs-nav-indicator" ref = "indicator"></div>
    </div>
    
    <div class="gulu-tabs-content">
        <component class="gulu-tabs-content-item"
        :class="{selected: c.props.title == selected}"
        v-for="(c,index) in defaults" :is="c" :key="index"   />
    </div>
    </div>
</template>
<script lang="ts">
import { ref, watchEffect } from 'vue'
import Tab from './Tab.vue'
export default {
    props: {
      selected: {
        type: String
      }
    },
    setup(props, context) {
      // const navItems = ref<HTMLDivElement[]>([])  selectedItem类型有错待解决
      const selectedItem = ref<HTMLDivElement>(null)
      const indicator = ref<HTMLDivElement>(null)
      const container = ref<HTMLDivElement>(null)
      // onMounted(x)
      // onUpdated(x)
      watchEffect(() => {
        //会在onMount之前渲染一次，没有参数下列代码会报错
        if(selectedItem.value && indicator.value){
          const {width, left: left2} = selectedItem.value.getBoundingClientRect()
          indicator.value.style.width = width + 'px'
          const {left: left1} = container.value.getBoundingClientRect()
          const left = left2 - left1
          indicator.value.style.left = left + 'px'
        }
        
      })
      const defaults = context.slots.default()
      defaults.forEach((tag) => {
          if(tag.type != Tab){
              throw new Error('Tabs 子标签必须是 Tab')
          }
      })
      const titles = defaults.map((tag) => {
          return tag.props.title
      })
      const select = (title: String) =>{
        context.emit('update:selected', title)
      }
      return {
          defaults, titles, select, selectedItem, indicator, container
      }
    }
}
</script>
<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.gulu-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms
    }
  }
  &-content {
    padding: 8px 0;
    &-item {
      display: none;
      &.selected {
        display: block;
      }
    }
  }
}
</style>