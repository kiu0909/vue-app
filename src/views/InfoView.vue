<script setup lang="ts">
import NavigationDrawer from '@/components/NavigationDrawer.vue'
import WipBtn from '@/components/WipBtn.vue'
</script>

<template>
  <v-app>
    <NavigationDrawer class="naviiiiiiiiiiiiiiii" />
    <!-- todo 変な場所に表示されるのなおす -->
    <WipBtn title="yes"></WipBtn>
    <WipBtn title="no"></WipBtn>
  </v-app>
</template>
