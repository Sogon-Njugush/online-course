import React from 'react'
import SideNav from '../_components/SideNav'
import NavBar from '../_components/NavBar'

function layout({children}) {
  return (
    <div>
        <div className='sm:w-64 hidden sm:block fixed'>
        <SideNav/>
        </div>
        
        <NavBar/>
        <div className='sm:ml-64'>
        {children}
        </div>        
        </div>
  )
}

export default layout