import { create } from 'zustand'
import { Todo } from '../type/todoTypes'

type State = {
  todos: Todo[]
  addTodo: (todo: Todo) => void
}

export const useTodoStore = create<State>((set) => ({
  todos: [
    {
      id: '1',
      title: 'Todo 1',
      description: 'Todo 1 description',
      dueDate: '2022-01-01',
      completed: false,
    },
    {
      id: '2',
      title: 'Todo 2',
      description: 'Todo 2 description',
      dueDate: '2022-01-01',
      completed: true,
    },
  ],
  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
}))
