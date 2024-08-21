import Modal from './Modal'

export default function AddTodoModal() {
  return (
    <Modal
      title="Add Todo"
      dialogTrigger={
        <button className="bg-purple-700 rounded-full p-2">
          <img src="/plus.svg" alt="" className="" />
        </button>
      }
    >
      <div className="space-y-1">
        <div>
          <label htmlFor="title" className="text-sm">
            Title
          </label>
          <input
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
            type="date"
            id="due-date"
            className="w-full border border-gray-300 px-2 py-1 rounded"
          />
        </div>

        <div>
          <button className="bg-purple-700 rounded text-white w-full p-2 mt-3">
            Add
          </button>
        </div>
      </div>
    </Modal>
  )
}
