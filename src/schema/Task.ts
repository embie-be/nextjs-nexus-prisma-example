import { Task } from 'nexus-prisma'
import { extendType, objectType } from 'nexus'
export const Tasks = objectType({
  name: 'Task',
  description: Task.$description,
  definition(t) {
    t.field(Task.id)
    t.field(Task.title)
  },
})

export const TaskQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.nonNull.field('Task', {
      type: 'Task',
      resolve(_, __, ctx) {
        return [
          { id: 1, title: 'yolo' },
          { id: 2, title: 'yolt' },
        ]
      },
    })
  },
})
