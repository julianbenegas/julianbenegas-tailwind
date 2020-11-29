import { useState } from 'react'
import { HiSearch } from 'react-icons/hi'
import cx from 'clsx'

const Search = () => {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <label
      className={cx(
        'flex space-x-2 bg-white items-center text-sm px-3 py-2 text-gray-800 rounded-lg border border-gray-300 transition-colors cursor-text',
        { 'border-gray-400': isFocused }
      )}
      htmlFor="search"
    >
      <HiSearch
        className={cx('text-gray-400 text-base', {
          'text-gray-800': isFocused
        })}
      />
      <input
        type="text"
        className="placeholder-gray-400 focus:outline-none"
        placeholder='Type "/" to search'
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        id="search"
        name="search"
      />
    </label>
  )
}

export default Search
