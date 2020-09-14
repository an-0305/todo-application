<template>
  <v-dialog v-model="dialog" max-width="600" color="primary">
    <v-card>
      <v-card-title>{{ getTitle }}</v-card-title>
      <v-card-text>
        <v-text-field label="やること" :value="obj.title"></v-text-field>
        <v-text-field label="詳細" :value="obj.text"></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="dialog = false" color="primary">
          登録
        </v-btn>
        <v-btn @click="dialog = false" v-if="obj.title">
          削除
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import {
  defineComponent,
  toRefs,
  reactive,
  PropType,
  computed
} from "@vue/composition-api";
import { TodoItem } from "@/interface/index";

export default defineComponent({
  props: {
    obj: {
      type: Object as PropType<TodoItem>
    }
  },
  setup(props) {
    const state = reactive({
      dialog: false
    });
    const getTitle = computed(() => {
      if (props.obj) {
        return props.obj.title ? "編集" : "新規登録";
      }
    });
    return {
      ...toRefs(state),
      getTitle
    };
  }
});
</script>
