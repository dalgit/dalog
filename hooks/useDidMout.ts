import { useEffect } from 'react'

function useDidMount(callback: () => void) {
  useEffect(() => {
    callback()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

export default useDidMount
