<template>
    <div>Tabs示例</div>
    <h1>示例1</h1>
    <Tabs v-model:selected="x">
        <Tab title="导航1">内容1</Tab>
        <Tab title="导航2222222">内容2</Tab>
    </Tabs>
    <div></div>

    <div>Tabs示例</div>
    <h1>示例2</h1>
    <Tabs2 v-model:selected2="y">
        <Tab title="导航1">内容1</Tab>
        <Tab title="导航2">内容2</Tab>
    </Tabs2>


</template>
<script lang="ts">
import Tabs from '../lib/Tabs.vue'
import Tabs2 from '../lib/Tabs2.vue'
import Tab from '../lib/Tab.vue'
import { ref } from 'vue'
export default {
    components: { Tabs, Tab, Tabs2 },
    setup() {
        const x = ref('导航1')
        const y = ref('导航1')
        return {x, y}
    }
}
</script>
<style lang="scss" scoped>
</style>