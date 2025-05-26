<script setup>
// 已經在全域變數中註冊了 primevue/splitter
import AddComponentButton from '../AddComponentButton.vue';
</script>

<template>
    <div class="card">
        <Splitter style="height: 300px">
            <SplitterPanel class="flex items-center justify-center">
                Panel 1 <br><br>
                <AddComponentButton></AddComponentButton>
            </SplitterPanel>
            <SplitterPanel class="flex items-center justify-center">
                Panel 2 <br><br>
                <AddComponentButton></AddComponentButton>
            </SplitterPanel>
        </Splitter>
    </div>
</template>

<style scoped>

</style>