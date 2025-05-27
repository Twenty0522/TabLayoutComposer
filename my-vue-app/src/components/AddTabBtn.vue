<script setup>
const emit = defineEmits(["add"]);
</script>

<template>
  <button
    class="add-tab-btn"
    @click="emit('add')"
    style="
      margin-left: 8px;
      background: #e0e7ff;
      border: none;
      border-radius: 4px;
      padding: 4px 10px;
      cursor: pointer;
      font-size: 16px;
    "
    title="新增分頁"
  >
    ＋
  </button>
</template>
