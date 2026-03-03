import React, { useContext } from 'react'
import { GlobalContext } from './ContexApiConcept'

const A1 = () => {
    const res=useContext(GlobalContext)
        console.log(res)
  return (
    <div>A1</div>
  )
}

export default A1