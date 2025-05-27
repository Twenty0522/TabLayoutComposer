<script setup>
// 已經在全域變數中註冊了 primevue/splitter

import Tab2InPanel from '../Tab2InPanel.vue';

</script>


<template>
    <div class="card">
        <Splitter style="height: 600px" layout="vertical">
            <SplitterPanel class="flex items-center justify-center">
                <Tab2InPanel />
            </SplitterPanel>
            <SplitterPanel class="flex items-center justify-center">
                <Tab2InPanel />
            </SplitterPanel>
        </Splitter>
    </div>
</template>


<style scoped>

</style>