<template>
  <div class="list-wrapper">
    <todo-list :title="title.todo" />
    <todo-list :title="title.progress" />
    <todo-list :title="title.done" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "@vue/composition-api";
import TodoList from "@/components/TodoList.vue";

export default defineComponent({
  components: {
    TodoList
  },
  setup() {
    const title = reactive({
      todo: "TODO",
      progress: "進行中",
      done: "完了"
    });
    return {
      title
    };
  }
});
</script>

<style lang="scss" scoped>
.list-wrapper {
  width: 900px;
  margin: 0 auto;
  display: flex;
}
</style>
