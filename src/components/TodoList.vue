<template>
  <v-card class="list">
    <span>{{ title }}</span>
    <draggable group="item">
      <todo-item
        v-for="(item, index) of items"
        :key="index"
        :item="item"
        @emitOpenDialog="emitOpenDialog"
      />
    </draggable>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, SetupContext } from '@vue/composition-api'
import TodoItem from '@/components/TodoItem.vue'
import draggable from 'vuedraggable'
export default defineComponent({
  components: {
    TodoItem,
    draggable
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    items: {
      type: Array,
      default: () => []
    }
  },
  setup(props, context: SetupContext) {
    function emitOpenDialog(obj: object) {
      context.emit('emitOpenDialog', obj)
    }
    return {
      emitOpenDialog
    }
  }
})
</script>

<style lang="scss" scoped>
.list {
  width: 280px;
  padding: 18px;
  margin: 10px;
}
</style>
