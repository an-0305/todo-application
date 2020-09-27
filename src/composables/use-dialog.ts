import { reactive, computed } from "@vue/composition-api"
import { TodoItem } from "@/interface/index";

export default function toggleDialog(obj: TodoItem | undefined) {
  const state = reactive({
    dialog: false
  });

  const getTitle = computed(() => {
    if(obj) {
      return obj.title ? "編集" : "新規登録"
    }
  });
  return {
    state,
    getTitle
  }
}
