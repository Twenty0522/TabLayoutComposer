<script setup>

import AddComponentButton from '../AddComponentButton.vue';

// 已經在全域變數中註冊了 primevue/splitter
</script>

<template>
    <div class="card">
        <Splitter style="height: 500px">
            <!-- size 屬性是百分比 -->
            <SplitterPanel class="flex items-center justify-center" :size="30" :minSize="10">
                Panel 1 <br><br>
                <AddComponentButton></AddComponentButton>
            </SplitterPanel>
            <SplitterPanel :size="70">
                <Splitter layout="vertical">
                    <SplitterPanel class="flex items-center justify-center" :size="25">
                        Panel 2 <br><br>
                        <AddComponentButton></AddComponentButton>
                    </SplitterPanel>
                    <SplitterPanel :size="75">
                        <Splitter>
                            <SplitterPanel class="flex items-center justify-center" :size="50">
                                Panel 3<br><br>
                                <AddComponentButton></AddComponentButton>
                            </SplitterPanel>
                            <SplitterPanel class="flex items-center justify-center" :size="50">
                                Panel 4<br><br>
                                <AddComponentButton></AddComponentButton>
                             </SplitterPanel>
                        </Splitter>
                    </SplitterPanel>
                </Splitter>
            </SplitterPanel>
        </Splitter>
    </div>
</template>


<style scoped>

</style>