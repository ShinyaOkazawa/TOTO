<template>
  <v-list-item class="Item">
    <v-list-item-action>
      <v-checkbox
        v-model="isCompleted"
        off-icon="mdi-checkbox-blank-circle-outline"
        on-icon="mdi-check-circle"
      />
    </v-list-item-action>
    <v-list-item-content>
      <v-list-item-title v-text="item.name" />
    </v-list-item-content>
    <v-list-item-action>
      <v-btn icon @click="onDelete">
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </v-list-item-action>
  </v-list-item>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  PropType,
  SetupContext,
} from '@nuxtjs/composition-api'
import { Task } from '~/types/models/Task'
type Props = {
  item: Task
}
export default defineComponent({
  props: {
    item: {
      type: Object as PropType<Task>,
      default: () => ({}),
    },
  },
  setup(props: Props, context: SetupContext) {
    const isCompleted = computed({
      get: () => props.item.isCompleted,
      set: (value) => {
        context.emit('onComplete', { isCompleted: value, id: props.item._id })
      },
    })
    const onDelete = () => {
      context.emit('onDelete', props.item._id)
    }
    return {
      isCompleted,
      onDelete,
    }
  },
})
</script>
