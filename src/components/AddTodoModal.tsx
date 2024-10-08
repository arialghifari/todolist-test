import React from 'react'
import Modal from './Modal'
import { useTodoStore } from '../store/todoStore'

export default function AddTodoModal() {
  const { addTodo } = useTodoStore()
  const [title, setTitle] = React.useState('')
  const [description, setDescription] = React.useState('')
  const [dueDate, setDueDate] = React.useState('')
  const [isOpen, setIsOpen] = React.useState(false)
  const [error, setError] = React.useState({
    title: '',
    dueDate: '',
  })

  function handleSubmit() {
    if (!title) {
      setError({ ...error, title: 'Title is required' })
      return
    }
    if (!dueDate) {
      setError({ ...error, dueDate: 'Due date is required' })
      return
    }

    const date = new Date()

    const todo = {
      id: crypto.randomUUID(),
      title,
      description,
      createdDate: date.toLocaleDateString('en-GB'),
      dueDate,
      completed: false,
    }

    addTodo(todo)
    setTitle('')
    setDescription('')
    setDueDate('')
    setIsOpen(false)
  }

  return (
    <Modal
      open={isOpen}
      setOpen={setIsOpen}
      title="Add Todo"
      dialogTrigger={
        <button className="bg-blue-700 rounded-full p-2">
          <img src="/plus.svg" alt="" className="" />
        </button>
      }
    >
      <div className="space-y-4">
        <div>
          <label htmlFor="title" className="text-sm">
            Title *
          </label>
          <input
            onChange={(e) => {
              setTitle(e.target.value)
              setError({ ...error, title: '' })
            }}
            value={title}
            type="text"
            id="title"
            placeholder="todo title"
            className="w-full border border-gray-300 px-2 py-1 rounded"
          />
          {error?.title && (
            <p className="text-red-500 text-sm mt-1">{error.title}</p>
          )}
        </div>

        <div>
          <label htmlFor="description" className="text-sm">
            Description
          </label>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            id="description"
            rows={3}
            className="w-full border border-gray-300 px-2 py-1 rounded block"
            placeholder="todo description"
          />
        </div>

        <div>
          <label htmlFor="due-date" className="text-sm">
            Due Date *
          </label>
          <input
            onChange={(e) => {
              setDueDate(e.target.value)
              setError({ ...error, dueDate: '' })
            }}
            value={dueDate}
            type="date"
            id="due-date"
            className="w-full border border-gray-300 px-2 py-1 rounded"
          />
          {error?.dueDate && (
            <p className="text-red-500 text-sm mt-1">{error.dueDate}</p>
          )}
        </div>

        <div>
          <button
            onClick={handleSubmit}
            className="bg-blue-700 rounded text-white w-full p-2 mt-3"
          >
            Add
          </button>
        </div>
      </div>
    </Modal>
  )
}
