import React from 'react'
//import { NavLink } from "react-router-dom"

import Footer from './Footer';
import Nav from './Nav';

const Layout = ({ children }) => {
    return (
        <>
            <Nav />
            {children}
            <Footer />
        </>
      )
}

export default Layout