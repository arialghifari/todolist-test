import { create } from 'zustand'
import { Todo } from '../type/todoTypes'
import { useTodoStore } from './todoStore'

type FilterState = {
  filteredTodos: Todo[]
  searchTodos: (searchTerm: string) => void
  clearFilteredTodos: () => void
}

export const useFilterStore = create<FilterState>((set) => ({
  filteredTodos: useTodoStore.getState().todos,
  searchTodos: (searchTerm) => {
    const todos = useTodoStore.getState().todos
    set({
      filteredTodos: todos.filter((todo) =>
        todo.title.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    })
  },
  clearFilteredTodos: () =>
    set({ filteredTodos: useTodoStore.getState().todos }),
}))
