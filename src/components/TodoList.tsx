import React from 'react'
import { useFilterStore } from '../store/filterStore'
import { useTodoStore } from '../store/todoStore'
import EmptyState from './EmptyState'
import Todo from './Todo'

export default function TodoList() {
  const { todos } = useTodoStore()
  const { filteredTodos, clearFilteredTodos } = useFilterStore()

  React.useEffect(() => {
    clearFilteredTodos()
  }, [todos, clearFilteredTodos])

  if (todos.length === 0) {
    return <EmptyState text="Empty.." />
  }

  if (filteredTodos.length === 0) {
    return <EmptyState text="Nothing found.." />
  }

  return (
    <ul className="space-y-2">
      {filteredTodos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}
