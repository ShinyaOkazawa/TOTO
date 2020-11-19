<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <TaskRegister />
      <TaskList :items="items" />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { Task } from '~/types/models/Task'

export default defineComponent({
  setup() {
    // ここにリアクティブなデータ、関数を定義
    const items: Task[] = [
      {
        _id: '1',
        name: 'TODOアイテム',
        isCompleted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        _id: '2',
        name: 'TODOアイテム',
        isCompleted: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]
    return {
      items,
    }
  },
})
</script>
