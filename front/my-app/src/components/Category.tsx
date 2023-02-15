import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Category = () => {
  return (
    <div style={{color: 'white'}}>
        <h1>Category</h1>
        {/* <Link to='/Category/catID'>gg</Link>|{" "}<br /> */}
        <h2>Please Choose options</h2>< br /><br />
        <Link to='/Category/1'>Dogs</Link>|{" "}
        <Link to='/Category/2'>Cat</Link>|{" "}
        <Link to='/Category/3'>Monkey</Link>
        <Outlet></Outlet>
        </div>
  )
}

export default Category