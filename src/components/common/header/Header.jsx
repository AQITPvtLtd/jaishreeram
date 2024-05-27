import React from 'react'
import Top from './Top'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className="fixed top-0 w-full z-50">
      <Top />
      <Navbar />
    </div>
  )
}

export default Header
