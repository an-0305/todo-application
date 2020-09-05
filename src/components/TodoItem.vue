<template>
  <v-card class="item">
    <v-card-title>{{ item.title }}</v-card-title>
    <v-card-text>{{ item.text }}</v-card-text>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@vue/composition-api";
interface Item {
  title: string;
  text: string;
}
export default defineComponent({
  props: {
    item: Object as PropType<Item>
  }
});
</script>

<style lang="scss" scoped>
.item {
  width: 240px;
  margin: 8px 0;
}
</style>
