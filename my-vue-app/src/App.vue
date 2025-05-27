<script setup>
import { ref } from 'vue'
import Tag from './components/Tag.vue'
import draggable from 'vuedraggable'

const items = ref([
  { id: 1, name: '任務一：整理資料' },
  { id: 2, name: '任務二：撰寫報告' },
  { id: 3, name: '任務三：準備簡報' },
])

</script>

<template>
  <p class="T1">個人財務儀表板</p>
  <Tag />
</template>

<style scoped>
.T1 {
  font-size: 25px;
}


</style>
