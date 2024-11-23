import React from 'react'
import Navbar from './Navbar'
import Featured from './Featured'
import Events from './Events'
import Footer from './Footer'

const HomePage = () => {
  return (
    <div>
        <Navbar />
        <Featured />
        <Events />
        <Footer />

    </div>
  )
}

export default HomePage;