import { create } from 'zustand'
import { Todo } from '../type/todoTypes'
import { useTodoStore } from './todoStore'

type FilterState = {
  filteredTodos: Todo[]
  searchTodos: (searchTerm: string) => void
  clearFilteredTodos: () => void
  curentFilter: string
  filterTodos: (filter: string) => void
  currentSort: string
  sortTodos: (sort: string) => void
}

export const useFilterStore = create<FilterState>((set, get) => ({
  filteredTodos: useTodoStore.getState().todos,
  searchTodos: (searchTerm) => {
    const todos = useTodoStore.getState().todos
    set({
      filteredTodos: todos.filter((todo) =>
        todo.title.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    })
  },
  curentFilter: 'All',
  filterTodos: (filter) => {
    const todos = useTodoStore.getState().todos

    set({ filteredTodos: todos, curentFilter: filter })
    if (filter === 'All') {
      set({ filteredTodos: todos })
    } else if (filter === 'Completed') {
      set({ filteredTodos: todos.filter((todo) => todo.completed) })
    } else if (filter === 'Uncompleted') {
      set({ filteredTodos: todos.filter((todo) => !todo.completed) })
    } else if (filter === 'Is Overdue') {
      set({
        filteredTodos: todos.filter(
          (todo) => new Date(todo.dueDate) < new Date()
        ),
      })
    } else if (filter === 'Is Not Overdue') {
      set({
        filteredTodos: todos.filter(
          (todo) => new Date(todo.dueDate) >= new Date()
        ),
      })
    }
  },
  currentSort: 'Created (Old)',
  sortTodos: (sort) => {
    const todos = get().filteredTodos

    if (sort === 'Created (Old)') {
      set({
        filteredTodos: todos.sort(
          (a, b) =>
            new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
        ),
      })
    } else if (sort === 'Created (New)') {
      set({
        filteredTodos: todos.sort(
          (a, b) =>
            new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime()
        ),
      })
    } else if (sort === 'Title (A-Z)') {
      set({
        filteredTodos: todos.sort((a, b) => a.title.localeCompare(b.title)),
      })
    } else if (sort === 'Title (Z-A)') {
      set({
        filteredTodos: todos.sort((a, b) => b.title.localeCompare(a.title)),
      })
    } else if (sort === 'Due Date (Old)') {
      set({
        filteredTodos: todos.sort(
          (a, b) =>
            new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
        ),
      })
    } else if (sort === 'Due Date (New)') {
      set({
        filteredTodos: todos.sort(
          (a, b) =>
            new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime()
        ),
      })
    }

    set({ currentSort: sort })
  },
  clearFilteredTodos: () =>
    set({
      filteredTodos: useTodoStore.getState().todos,
      curentFilter: 'All',
      currentSort: 'Created (Old)',
    }),
}))
