<template>
  <v-layout>
    <v-text-field v-model="text" label="タスクを追加" outlined> </v-text-field>
    <v-btn fab small class="mt-2 ml-3" @click="onRegister">
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </v-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
export default defineComponent({
  setup() {
    const text = ref('')
    const onRegister = () => {
      // eslint-disable-next-line no-console
      console.log(text.value)
      text.value = ''
    }
    return {
      text,
      onRegister,
    }
  },
})
</script>
