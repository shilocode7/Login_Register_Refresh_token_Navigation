import React from 'react'
import { useParams } from 'react-router-dom'

const Prouduct = () => {
    let params = useParams();
    console.log(params.catID)
  return (
    <div>Prouduct
        <h1>{params.catID}</h1>
    </div>
  )
}

export default Prouduct