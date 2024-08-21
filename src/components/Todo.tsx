import { Todo as todoType } from '../type/todoTypes'
import { useTodoStore } from '../store/todoStore'
import DeleteDialog from './DeleteDialog'
import EditTodoModal from './EditTodoModal'

export default function Todo({ todo }: { todo: todoType }) {
  const { toggleTodo } = useTodoStore()
  const formattedDate = new Date(todo.dueDate).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
  const isOverdue = new Date(todo.dueDate) < new Date()

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
          <p className="truncate">{todo.title}</p>
          <p
            className={`text-xs ${
              todo.completed ? 'text-gray-400' : 'text-gray-500'
            }`}
          >
            Due Date: {formattedDate}
            {isOverdue && <span className="text-red-500 ml-1"> (Overdue)</span>}
          </p>
        </label>
      </div>

      <div className="space-x-1 flex flex-none -ml-12 py-2 px-1">
        <EditTodoModal todo={todo} />
        <DeleteDialog todo={todo} />
      </div>
    </li>
  )
}
