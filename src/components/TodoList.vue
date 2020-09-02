<template>
  <v-card class="list">
    <span>{{ title }}</span>
    <todo-item />
    <todo-item />
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import TodoItem from "@/components/TodoItem.vue";
export default defineComponent({
  components: {
    TodoItem
  },
  props: {
    title: {
      type: String
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
