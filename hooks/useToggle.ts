import { useState } from 'react'

const useToggle = () => {
  const [isActive, setIsActive] = useState<boolean>(false)

  const toggle = () => {
    setIsActive(!isActive)
  }

  return { isActive, toggle }
}

export default useToggle
