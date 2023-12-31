import React from 'react'
import AddClientModel from '../components/AddClientModel'
import AddProjectModel from '../components/AddProjectModel'
import Projects from '../components/Projects'
import Clients from '../components/Clients'
import Footer from './Footer'
export default function Home() {
  return (
    <div className="d-flex flex-column min-vh-100">
        <div className='d-flex gap-3 mb-4'>
            <AddClientModel />
            <AddProjectModel />
        </div>
        <Projects />
        <hr />
        <Clients />
        <Footer />
    </div>
  )
}
