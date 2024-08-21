import { useFilterStore } from '../store/filterStore'
import Dropdown from './Dropdown'

export default function SortDropdown() {
  const SORT_OPTIONS = [
    'Created (Old)',
    'Created (New)',
    'Title (A-Z)',
    'Title (Z-A)',
    'Due Date (Old)',
    'Due Date (New)',
  ]
  const { currentSort, sortTodos } = useFilterStore()

  return (
    <Dropdown
      popoverTrigger={
        <button className="flex gap-1.5">
          <span>Sort by</span>
          <span className="font-semibold flex">
            {currentSort} <img src="/chevron-down.svg" alt="" />
          </span>
        </button>
      }
    >
      <>
        {SORT_OPTIONS.map((option) => (
          <div className="flex w-full gap-1">
            <input
              type="radio"
              name="filter"
              onChange={() => sortTodos(option)}
              id={option}
              defaultChecked={option === currentSort}
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
