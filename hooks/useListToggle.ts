import { useState, useRef, useEffect } from 'react'

const useListToggle = () => {
  const listRef = useRef<HTMLUListElement | HTMLDivElement>(null)
  const [isListOpen, setIsListOpen] = useState<boolean>(false)

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (listRef.current && !listRef.current.contains(e.target as Node)) {
        setIsListOpen(false)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [listRef, setIsListOpen])

  const toggleList = () => {
    setIsListOpen(!isListOpen)
  }

  return { isListOpen, listRef, toggleList }
}

export default useListToggle
