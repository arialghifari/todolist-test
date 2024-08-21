import { useTodoStore } from '../store/todoStore'
import Todo from './Todo'

export default function TodoList() {
  const { todos } = useTodoStore()

  if (todos.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center">
        <img src="/empty.svg" alt="empty todo" />
        <p className="mt-2">Empty..</p>
      </div>
    )
  }

  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}
