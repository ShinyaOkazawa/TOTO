<template>
  <v-list>
    <TaskItem
      v-for="item in items"
      :key="item._id"
      :item="item"
      @onComplete="onComplete"
      @onDelete="onDelete"
    />
  </v-list>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import { Task } from '~/types/models/Task'
export default defineComponent({
  props: {
    items: {
      type: Array as PropType<Task[]>,
      default: () => [],
    },
  },
  setup() {
    const onComplete = ({
      isCompleted,
      id,
    }: {
      isCompleted: boolean
      id: string
    }) => {
      // eslint-disable-next-line no-console
      console.log(isCompleted, id)
    }
    const onDelete = (id: string) => {
      // eslint-disable-next-line no-console
      console.log(id)
    }
    return {
      onComplete,
      onDelete,
    }
  },
})
</script>
