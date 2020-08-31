<template>
  <div>
    <todo-item />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import TodoItem from "@/components/TodoItem.vue";

export default defineComponent({
  components: {
    TodoItem
  }
});
</script>
