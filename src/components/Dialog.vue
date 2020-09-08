<template>
  <v-dialog v-model="dialog" max-width="600" color="primary">
    <v-card>
      <v-card-title>新規登録</v-card-title>
      <v-card-text>
        <v-text-field label="やること"></v-text-field>
        <v-text-field label="詳細"></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="dialog = false" color="primary">
          登録
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive } from "@vue/composition-api";
export default defineComponent({
  setup() {
    const state = reactive({
      dialog: false
    });
    return {
      ...toRefs(state)
    };
  }
});
</script>
