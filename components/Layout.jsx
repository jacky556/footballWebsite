import React from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'

const Layout = ({children}) => {
  return (
    <React.Fragment>
        <Navbar/>
        {children}
        <Footer/>
    </React.Fragment>
  )
}

export default Layout