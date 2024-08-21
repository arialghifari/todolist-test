import React from 'react'
import Modal from './Modal'
import { useTodoStore } from '../store/todoStore'
import { Todo } from '../type/todoTypes'

export default function EditTodoModal({ todo }: { todo: Todo }) {
  const { updateTodo } = useTodoStore()
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Modal
      open={isOpen}
      setOpen={setIsOpen}
      title="Edit Todo"
      dialogTrigger={
        <button>
          <img src="/edit.svg" alt="edit" />
        </button>
      }
    >
      <div>
        <p className="flex items-center gap-0.5 text-sm text-gray-400 -mt-2 mb-4">
          <img src="/info.svg" alt="info" /> All changes are saved automatically
        </p>

        <div className="space-y-4">
          <div>
            <label htmlFor="title" className="text-sm">
              Title
            </label>
            <input
              onChange={(e) =>
                updateTodo(todo.id, { ...todo, title: e.target.value })
              }
              defaultValue={todo.title}
              type="text"
              id="title"
              placeholder="todo title"
              className="w-full border border-gray-300 px-2 py-1 rounded"
            />
          </div>

          <div>
            <label htmlFor="description" className="text-sm">
              Description
            </label>
            <textarea
              onChange={(e) =>
                updateTodo(todo.id, { ...todo, description: e.target.value })
              }
              defaultValue={todo.description}
              id="description"
              rows={3}
              className="w-full border border-gray-300 px-2 py-1 rounded block"
              placeholder="todo description"
            />
          </div>

          <div>
            <label htmlFor="due-date" className="text-sm">
              Due Date
            </label>
            <input
              onChange={(e) =>
                updateTodo(todo.id, { ...todo, dueDate: e.target.value })
              }
              defaultValue={todo.dueDate}
              type="date"
              id="due-date"
              className="w-full border border-gray-300 px-2 py-1 rounded"
            />
          </div>
        </div>
      </div>
    </Modal>
  )
}
