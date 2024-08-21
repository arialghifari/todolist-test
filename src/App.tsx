import AddTodoModal from './components/AddTodoModal'
import FilterDropdown from './components/FilterDropdown'
import SortDropdown from './components/SortDropdown'
import TodoList from './components/TodoList'
import { useFilterStore } from './store/filterStore'

function App() {
  const { searchTodos, clearFilteredTodos } = useFilterStore()

  return (
    <div className="flex flex-col items-center justify-between h-screen bg-gray-50">
      <div className="flex flex-col relative p-4 md:p-10 w-full md:w-[600px]">
        <h1 className="text-center text-2xl font-bold">TODO LIST</h1>

        <div className="mt-10 flex flex-col gap-4">
          <input
            onChange={(e) => {
              clearFilteredTodos()
              searchTodos(e.target.value)
            }}
            type="text"
            placeholder="Search todo.."
            className="w-full border border-gray-300 px-2 py-2 rounded"
          />

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-8">
            <FilterDropdown />
            <SortDropdown />
          </div>
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
