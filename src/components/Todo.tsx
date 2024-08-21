import { Todo as todoType } from '../type/todoTypes'
import { useTodoStore } from '../store/todoStore'

export default function Todo({ todo }: { todo: todoType }) {
  const { toggleTodo, deleteTodo } = useTodoStore()
  const formattedDate = new Date(todo.dueDate).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  return (
    <li
      key={todo.id}
      className="flex justify-between items-center hover:bg-slate-100 rounded px-2"
    >
      <div className="flex w-full">
        <input
          type="checkbox"
          id={todo.id}
          defaultChecked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        <label
          htmlFor={todo.id}
          className={`flex flex-col w-full px-2 py-1 h-full ${
            todo.completed && 'line-through text-gray-400'
          }`}
        >
          <p>{todo.title}</p>
          <p
            className={`text-xs ${
              todo.completed ? 'text-gray-400' : 'text-gray-500'
            }`}
          >
            Due Date: {formattedDate}
          </p>
        </label>
      </div>

      <div className="space-x-1 flex">
        <button>
          <img src="/edit.svg" alt="edit" />
        </button>
        <button onClick={() => deleteTodo(todo.id)}>
          <img src="/trash.svg" alt="delete" />
        </button>
      </div>
    </li>
  )
}
