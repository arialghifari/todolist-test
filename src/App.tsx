import AddTodoModal from './components/AddTodoModal'
import TodoList from './components/TodoList'

function App() {
  return (
    <div className="flex justify-center h-screen bg-gray-50">
      <div className="flex flex-col w-[600px] relative p-10">
        <h1 className="text-center text-2xl font-bold">TODO LIST</h1>

        <div className="mt-10 flex gap-5">
          <input
            type="text"
            placeholder="Search note.."
            className="w-full border border-gray-300 px-2 py-1 rounded"
          />
        </div>

        <div className="mt-8">
          <TodoList />
        </div>

        <div className="absolute bottom-10 right-10">
          <AddTodoModal />
        </div>
      </div>
    </div>
  )
}

export default App
