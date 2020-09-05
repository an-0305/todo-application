<template>
  <v-card class="list">
    <span>{{ title }}</span>
    <draggable group="item">
      <todo-item v-for="(item, index) of items" :key="index" :item="item" />
    </draggable>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import TodoItem from "@/components/TodoItem.vue";
import draggable from "vuedraggable";
export default defineComponent({
  components: {
    TodoItem,
    draggable
  },
  props: {
    title: {
      type: String
    },
    items: {
      type: Array
    }
  }
});
</script>

<style lang="scss" scoped>
.list {
  width: 280px;
  padding: 18px;
  margin: 10px;
}
</style>
