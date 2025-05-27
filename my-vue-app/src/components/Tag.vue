<script setup>
import { ref } from "vue";
import Tabs from "primevue/tabs";
import TabList from "primevue/tablist";
import Tab from "primevue/tab";
import TabPanels from "primevue/tabpanels";
import TabPanel from "primevue/tabpanel";
import draggable from "vuedraggable";

import Sp1 from "./Splitters/Sp1.vue";
import Sp2 from "./Splitters/Sp2.vue";
import Sp3 from "./Splitters/Sp3.vue";

const tabItems = ref([
  { label: "水平", value: "0", component: Sp1 },
  { label: "垂直", value: "1", component: Sp2 },
  { label: "嵌套", value: "2", component: Sp3 },
]);
const activeTab = ref("0");

// 刪除 tab 的方法
function removeTab(idx) {
  tabItems.value.splice(idx, 1);
  // 若刪除的是目前 activeTab，要自動切換
  if (!tabItems.value.find((tab) => tab.value === activeTab.value)) {
    activeTab.value = tabItems.value[0]?.value ?? "";
  }
}

// 新增 tab 的方法
let tabCount = 3;
function addTab() {
  tabCount++;
  tabItems.value.push({
    label: `新分頁${tabCount}`,
    value: String(tabCount),
    component: Sp1 // 預設用 Sp1，你可依需求更換
  });
  activeTab.value = String(tabCount); // 新增後自動切換到新分頁
}
</script>

<template>
  <div class="card">
    <Tabs v-model:value="activeTab">
      <TabList>
        <draggable
          v-model="tabItems"
          tag="div"
          class="flex"
          :animation="200"
          item-key="value"
        >
          <template #item="{ element, index }">
            <Tab :value="element.value">
              {{ element.label }}
              <button
                class="delete-btn"
                @click.stop="removeTab(index)"
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
            </Tab>
          </template>
        </draggable>
        <!-- 新增分頁按鈕 -->
        <button
          class="add-tab-btn"
          @click="addTab"
          title="新增分頁"
          style="
            margin-left: 8px;
            border: none;
            border-radius: 4px;
            padding: 10px 10px;
            cursor: pointer;
            font-size: 16px;
            color:green; "
        >＋
        </button>
      </TabList>
      <TabPanels>
        <TabPanel
          v-for="item in tabItems"
          :key="item.value"
          :value="item.value"
        >
          <component :is="item.component" />
        </TabPanel>
      </TabPanels>
    </Tabs>
  </div>
</template>

<style scoped>
.delete-btn {
  margin: 0 0 0 10px;
}
</style>
