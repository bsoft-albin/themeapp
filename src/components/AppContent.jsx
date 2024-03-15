import React from 'react'
import About from './About'
import Portfolio from './Portfolio'
import Resume from './Resume'
import Owner from './Owner'
import Services from './Services'
import Contact from './Contact'
import Blogs from './Blogs'

const AppContent = ({propactiveMenu,ownerActivefn}) => {
  return (
    <main className=''>
        {propactiveMenu === 'about' && <About /> }
        {propactiveMenu === 'portfolio' && <Portfolio /> }
        {propactiveMenu === 'resume' && <Resume /> }
        {propactiveMenu === 'owner' && <Owner propOwnerfn={ownerActivefn} /> }
        {propactiveMenu === 'services' && <Services /> }
        {propactiveMenu === 'contact' && <Contact /> }
        {propactiveMenu === 'blogs' && <Blogs /> }
    </main>
  )
}

export default AppContent