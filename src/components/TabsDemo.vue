<template>

<h2>Tabs 示例</h2>
<Demo :component="Tabs1Demo" />
<hr />

    <div>Tabs示例</div>
    <h2>示例1</h2>
    <Tabs v-model:selected="x">
        <Tab title="导航1">内容1</Tab>
        <Tab title="导航2222222">内容2</Tab>
    </Tabs>
    <div class="gulu-fen"></div>

    <div>Tabs示例</div>
    <h2>示例2</h2>
    <Tabs2 v-model:selected2="y">
        <Tab title="导航1">内容1</Tab>
        <Tab title="导航2222">内容2</Tab>
    </Tabs2>


</template>
<script lang="ts">
import Demo from './Demo.vue'
import Tabs1Demo from './Tabs1.demo.vue'

import Tabs from '../lib/Tabs.vue'
import Tabs2 from '../lib/Tabs2.vue'
import Tab from '../lib/Tab.vue'
import { ref } from 'vue'
export default {
    components: { Tabs, Tab, Tabs2 , Demo},
    setup() {
        const x = ref('导航1')
        const y = ref('导航1')
        return {x, y, Tabs1Demo}
    }
}
</script>
<style lang="scss" scoped>
.gulu-fen{
    height:50px;
    background: none;

}
</style>