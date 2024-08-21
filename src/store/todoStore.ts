import { create } from 'zustand'
import { Todo } from '../type/todoTypes'
import { persist } from 'zustand/middleware'

type State = {
  todos: Todo[]
  toggleTodo: (id: string) => void
  addTodo: (todo: Todo) => void
  deleteTodo: (id: string) => void
  updateTodo: (id: string, updatedTodo: Todo) => void
}

export const useTodoStore = create<State>()(
  persist(
    (set) => ({
      todos: [
        {
          id: '1',
          title: 'Todo 1',
          description: 'Todo 1 description',
          createdDate: '21/08/2024',
          dueDate: '2024-08-23',
          completed: false,
        },
        {
          id: '2',
          title: 'Todo 2',
          description: 'Todo 2 description',
          createdDate: '21/08/2024',
          dueDate: '2024-08-30',
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
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        })),
      updateTodo: (id, updatedTodo) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? updatedTodo : todo
          ),
        })),
    }),
    {
      name: 'todo-list',
      getStorage: () => localStorage,
    }
  )
)
