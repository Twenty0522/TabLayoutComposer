<script setup>
import { ref } from "vue";
const visible = ref(false);
</script>

<template>
  <div class="card flex justify-center">
    <Button
      label="新增元件"
      @click="visible = true"
      size="small"
      class="p-button-secondary"
    />
    <Dialog
      v-model:visible="visible"
      modal
      header="選擇項目"
      :style="{ width: '25rem' }"
    >
      <!-- 假資料 -->
      <div class="option-row">
        <RadioButton
          v-model="selectedItem"
          inputId="item1"
          name="dashboard"
          value="月收支圖表"
        />
        <label for="item1">月收支圖表</label>
      </div>
      <div class="option-row">
        <RadioButton
          v-model="selectedItem"
          inputId="item2"
          name="dashboard"
          value="投資組合分佈"
        />
        <label for="item2">投資組合分佈</label>
      </div>
      <div class="option-row">
        <RadioButton
          v-model="selectedItem"
          inputId="item3"
          name="dashboard"
          value="儲蓄進度條"
        />
        <label for="item3">儲蓄進度條</label>
      </div>
      <div class="option-row">
        <RadioButton
          v-model="selectedItem"
          inputId="item4"
          name="dashboard"
          value="債務追蹤"
        />
        <label for="item4">債務追蹤</label>
      </div>
      <div class="option-row">
        <RadioButton
          v-model="selectedItem"
          inputId="item5"
          name="dashboard"
          value="每月報告自動摘要"
        />
        <label for="item5">每月報告自動摘要</label>
      </div>

      <div class="button-row">
        <Button
          type="button"
          label="取消"
          severity="secondary"
          size="small"
          @click="visible = false"
        ></Button>
        <Button
          type="button"
          label="儲存"
          size="small"
          @click="
            handleSave;
            visible = false;
          "
        ></Button>
      </div>
    </Dialog>
  </div>
</template>

<style scoped>
/* 讓每個選項間距拉開 */
.option-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.2rem;
}

/* 最後一個選項不要有 margin-bottom */
.option-row:last-child {
  margin-bottom: 0;
}

.button-row {
  display: flex;
  justify-content: flex-end;
  width: 100%;
}
</style>
