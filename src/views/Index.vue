<template>
  <div class="main">
    <div class="button-wrapper">
      <v-btn color="primary" @click.stop="toggleDialog">新規登録</v-btn>
    </div>
    <div class="list-wrapper">
      <todo-list
        :title="title.todo"
        :items="todoItem"
        @emitOpenDialog="toggleDialog"
      />
      <todo-list
        :title="title.progress"
        :items="progressItem"
        @emitOpenDialog="toggleDialog"
      />
      <todo-list
        :title="title.done"
        :items="doneItem"
        @emitOpenDialog="toggleDialog"
      />
    </div>
    <Dialog ref="dialogRef" :obj="obj" />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  computed,
  ref,
  toRefs
} from "@vue/composition-api";
import TodoList from "@/components/TodoList.vue";
import Dialog from "@/components/Dialog.vue";

export default defineComponent({
  components: {
    TodoList,
    Dialog
  },
  setup() {
    const dialogRef = ref<InstanceType<typeof Dialog>>();

    const title = reactive({
      todo: "TODO",
      progress: "進行中",
      done: "完了"
    });
    const content = reactive({
      items: [
        { title: "掃除をする", text: "今日中に掃除をする", status: 1 },
        { title: "皿洗い", text: "皿を洗う", status: 1 },
        { title: "買い物", text: "明日の朝ごはんを買いに行く", status: 2 },
        { title: "洗濯", text: "午前中に洗濯機を回す", status: 3 }
      ]
    });
    const propObj = reactive({
      obj: {}
    });
    const todoItem = computed(() =>
      content.items.filter(item => item.status === 1)
    );
    const progressItem = computed(() =>
      content.items.filter(item => item.status === 2)
    );
    const doneItem = computed(() =>
      content.items.filter(item => item.status === 3)
    );
    function toggleDialog(obj: object) {
      if (obj) {
        propObj.obj = obj;
      }
      if (dialogRef.value) {
        dialogRef.value.dialog = true;
      }
    }
    return {
      title,
      content,
      todoItem,
      progressItem,
      doneItem,
      toggleDialog,
      dialogRef,
      ...toRefs(propObj)
    };
  }
});
</script>

<style lang="scss" scoped>
.main {
  width: 900px;
  margin: 0 auto;
}
.list-wrapper {
  width: 900px;
  margin: 0 auto;
  display: flex;
}
.button-wrapper {
  padding: 10px;
}
</style>
