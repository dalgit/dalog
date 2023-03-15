import { CSSProperties } from 'react'
import { BarLoader } from 'react-spinners'

const Spinner = () => {
  return <BarLoader color="#B1B2FF" cssOverride={override} />
}

export default Spinner

const override: CSSProperties = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
}
