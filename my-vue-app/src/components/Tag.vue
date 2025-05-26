<script setup>
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';

import Sp1 from './Sp1.vue';
import Sp2 from './Sp2.vue';
import Sp3 from './Sp3.vue';
</script>


<template>
  <div class="card" style="width: 900px;">
      <Tabs value="0">
          <TabList>
              <Tab value="0">水平</Tab>
              <Tab value="1">垂直</Tab>
              <Tab value="2">嵌套</Tab>
          </TabList>
          <TabPanels>
              <TabPanel value="0">
                  <p class="m-0">
                    <Sp1 />
                  </p>
              </TabPanel>
              <TabPanel value="1">
                  <p class="m-0">
                    <Sp2 />
                  </p>
              </TabPanel>
              <TabPanel value="2">
                <p class="m-0">
                  <Sp3 />
                </p>
              </TabPanel>
          </TabPanels>
      </Tabs>
  </div>
</template>


<style scoped>

</style>