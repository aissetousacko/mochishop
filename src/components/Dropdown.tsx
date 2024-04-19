'use client'
import { dropdownOptions } from '@/app/interface'
import React, { useEffect, useRef, useState } from 'react'

interface Props {
  title: string
  content: string
}

const Dropdown: React.FC<Props> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [])

  return (
    <div ref={dropdownRef} className="my-8">
      <button
        id="dropdownButton"
        className="px-7 flex justify-between rounded-md font-medium bg-secondary-50 title-1 w-full"
        onClick={toggleDropdown}
      >
        {title} <span className="text-accent">{isOpen ? '-' : '+'}</span>
      </button>

      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } transition duration-200 ease-in-out transform origin-top h-[220px] overflow-y-auto`}
      >
        <p className="px-6 py-3">{content}</p>
      </div>
    </div>
  )
}

export default Dropdown
