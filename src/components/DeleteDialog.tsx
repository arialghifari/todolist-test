import Dialog from './Dialog'
import { Todo } from '../type/todoTypes'
import { useTodoStore } from '../store/todoStore'

export default function DeleteDialog({ todo }: { todo: Todo }) {
  const { deleteTodo } = useTodoStore()

  return (
    <Dialog
      title={`Delete "${todo.title}"?`}
      dialogTrigger={
        <button>
          <img src="/trash.svg" alt="delete" />
        </button>
      }
      dialogAction={
        <button
          onClick={() => deleteTodo(todo.id)}
          className="bg-red-600 rounded px-2 py-1 text-white"
        >
          Delete
        </button>
      }
    ></Dialog>
  )
}
