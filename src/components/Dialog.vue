<template>
  <v-dialog v-model="state.dialog" max-width="600" color="primary">
    <v-card>
      <v-card-title>{{ getTitle }}</v-card-title>
      <v-card-text>
        <v-text-field label="やること" :value="obj.title"></v-text-field>
        <v-text-field label="詳細" :value="obj.text"></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="state.dialog = false">
          登録
        </v-btn>
        <v-btn v-if="obj.title" @click="state.dialog = false">
          削除
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import { TodoItem } from '@/interface/index'
import toggleDialog from '@/composables/use-dialog'

export default defineComponent({
  props: {
    obj: {
      type: Object as PropType<TodoItem>,
      default: null
    }
  },
  setup(props) {
    const { state, getTitle } = toggleDialog(props.obj)
    return {
      state,
      getTitle
    }
  }
})
</script>
