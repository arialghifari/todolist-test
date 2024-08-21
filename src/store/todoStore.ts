import { create } from 'zustand'
import { Todo } from '../type/todoTypes'

type State = {
  todos: Todo[]
  toggleTodo: (id: string) => void
  addTodo: (todo: Todo) => void
  deleteTodo: (id: string) => void
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
      dueDate: '2022-01-31',
      completed: true,
    },
  ],
  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    })),
  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
  deleteTodo: (id) =>
    set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) })),
}))
