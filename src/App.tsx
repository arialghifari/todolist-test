import AddTodoModal from './components/AddTodoModal'

function App() {
  return (
    <div className="flex justify-center h-screen bg-gray-50">
      <div className="flex flex-col w-[600px] relative p-10">
        <h1 className="text-center text-2xl font-bold">TODO LIST</h1>

        <div className="mt-10 flex gap-5">
          <input
            type="text"
            placeholder="Search note.."
            className="w-80 border border-gray-300 px-2 py-1 rounded"
          />
          <button>All</button>
        </div>

        <div className="mt-8">
          {/* <img src="/empty.svg" alt="" /> */}

          <ul className="space-y-2">
            <li className="flex justify-between items-center">
              <div className="flex w-full">
                <input type="checkbox" id="note-1" />
                <label htmlFor="note-1" className="flex w-full px-2">
                  Note 1
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

            <li className="flex justify-between items-center">
              <div className="flex w-full">
                <input type="checkbox" id="note-2" />
                <label htmlFor="note-2" className="flex w-full px-2">
                  Note 2
                </label>
              </div>

              <div className="space-x-2 flex">
                <button>
                  <img src="/edit.svg" alt="edit" />
                </button>
                <button>
                  <img src="/trash.svg" alt="delete" />
                </button>
              </div>
            </li>
          </ul>
        </div>

        <div className="absolute bottom-10 right-10">
          <AddTodoModal />
        </div>
      </div>
    </div>
  )
}

export default App
