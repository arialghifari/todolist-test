import { Todo as todoType } from '../type/todoTypes'

export default function Todo({ todo }: { todo: todoType }) {
  return (
    <li key={todo.id} className="flex justify-between items-center">
      <div className="flex w-full">
        <input type="checkbox" id={todo.id} defaultChecked={todo.completed} />
        <label htmlFor={todo.id} className="flex w-full px-2">
          {todo.title}
        </label>
      </div>

      <div className="space-x-1 flex">
        <button>
          <img src="/edit.svg" alt="edit" />
        </button>
        <button>
          <img src="/trash.svg" alt="delete" />
        </button>
      </div>
    </li>
  )
}
