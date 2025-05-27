<script setup>
const props = defineProps(['onRemove', 'index'])

</script>

<template >
  <button
    class="delete-btn"
    @click.stop="props.onRemove(props.index)"
    style="
      font-size: 10px;
      padding: 8px 8px;
      background: transparent;
      border: none;
      color: green;
      cursor: pointer;
    "
    title="刪除"
  >
    ✕
  </button>
</template>
