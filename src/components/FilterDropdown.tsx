import { useFilterStore } from '../store/filterStore'
import Dropdown from './Dropdown'

export default function FilterDropdown() {
  const FILTER_OPTIONS = ['All', 'Completed', 'Uncompleted']
  const { curentFilter, filterTodos } = useFilterStore()

  return (
    <Dropdown
      popoverTrigger={
        <button className="flex gap-1.5">
          <span>Filter by</span>
          <span className="font-semibold flex">
            {curentFilter} <img src="/chevron-down.svg" alt="" />
          </span>
        </button>
      }
    >
      <>
        {FILTER_OPTIONS.map((option) => (
          <div className="flex w-full gap-1">
            <input
              type="radio"
              name="filter"
              onChange={() => filterTodos(option)}
              id={option}
              defaultChecked={option === curentFilter}
            />
            <label htmlFor={option} className="flex-1">
              {option}
            </label>
          </div>
        ))}
      </>
    </Dropdown>
  )
}
