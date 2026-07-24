import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

function Layout() {
  return (
    <div>
        <Navbar />
        <Hero />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
