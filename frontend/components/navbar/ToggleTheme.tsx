import { MoonIcon, SunIcon } from '@heroicons/react/outline'
import React from 'react'

function ToggleTheme() {
  const isDarkMode = true

  return (
    <button>
      {isDarkMode ? (
        <SunIcon className="mr-2 h-5 w-5 lg:mr-0" />
      ) : (
        <MoonIcon className="mr-2 h-5 w-5 lg:mr-0" />
      )}
    </button>
  )
}

export default ToggleTheme
