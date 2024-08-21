import AddTodoModal from './components/AddTodoModal'
import TodoList from './components/TodoList'
import { useFilterStore } from './store/filterStore'

function App() {
  const { searchTodos } = useFilterStore()

  return (
    <div className="flex flex-col items-center justify-between h-screen bg-gray-50">
      <div className="flex flex-col relative p-4 md:p-10 w-full md:w-[600px]">
        <h1 className="text-center text-2xl font-bold">TODO LIST</h1>

        <div className="mt-10 flex gap-5">
          <input
            onChange={(e) => searchTodos(e.target.value)}
            type="text"
            placeholder="Search note.."
            className="w-full border border-gray-300 px-2 py-1 rounded"
          />
        </div>

        <div className="mt-8 pb-10">
          <TodoList />
        </div>
      </div>

      <div className="px-4 md:px-10 sticky bottom-5 md:bottom-10 right-10 flex justify-end w-full md:w-[600px]">
        <AddTodoModal />
      </div>
    </div>
  )
}

export default App
