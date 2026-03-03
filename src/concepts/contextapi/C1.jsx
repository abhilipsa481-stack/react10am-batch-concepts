import React, { useContext } from 'react'
import C2 from './C2'
import { GlobalContext } from './ContexApiConcept'
import C4 from './C4'

const C1 = () => {
    // const res=useContext(GlobalContext)
    // console.log(res)
  return (
    <div>
      <C4 />
    </div>
  )
}

export default C1