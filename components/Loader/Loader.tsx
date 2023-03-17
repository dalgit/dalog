import { ReactNode } from 'react'
import Spinner from '../Spinner/Spinner'
import useLoading from '@/hooks/useLoading'

interface LoaderProps {
  children: ReactNode
}

const Loader = ({ children }: LoaderProps): JSX.Element => {
  const { isLoading } = useLoading()
  return isLoading ? <Spinner /> : (children as JSX.Element)
}

export default Loader
