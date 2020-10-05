<template>
  <v-card class="item" @click="openDialog">
    <v-card-title>{{ item.title }}</v-card-title>
    <v-card-text>{{ item.text }}</v-card-text>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, PropType, SetupContext } from '@vue/composition-api'
interface Item {
  title: string
  text: string
}
export default defineComponent({
  props: {
    item: {
      type: Object as PropType<Item>,
      defalut: {
        title: '',
        text: ''
      },
      required: true
    }
  },
  setup(props, context: SetupContext) {
    function openDialog() {
      if (props.item) {
        const emitObj = {
          title: props.item.title,
          text: props.item.text
        }
        context.emit('emitOpenDialog', emitObj)
      }
    }
    return {
      openDialog
    }
  }
})
</script>

<style lang="scss" scoped>
.item {
  width: 240px;
  margin: 8px 0;
}
</style>
