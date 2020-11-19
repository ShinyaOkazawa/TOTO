import { withKnobs, object } from '@storybook/addon-knobs'
import { Task } from '~/types/models/Task'
const item: Task = {
  _id: '1',
  name: 'TODOアイテム',
  isCompleted: false,
  createdAt: new Date(),
  updatedAt: new Date(),
}
export default {
  title: 'atoms',
  decorators: [withKnobs],
}

export const TaskItem = () => ({
  template: '<TaskItem :item="item" />',
  props: {
    item: {
      default: object('Item', item),
    },
  },
})
