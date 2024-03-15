import React from 'react'
import Avatar from '@mui/material/Avatar';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const FooterComponent = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Optional: Smooth scrolling effect
    });
  };

  return (
    <footer id="footer">
    <div className="container">
      <div>

      </div>
      <div className='wrapper'>
        <div className="copyright">
          &copy; Copyright Owned by <strong><span>Albin</span></strong>. All Rights Reserved
        </div>
        <div className="credits">
          Designed by <a target='_blank' href="https://albin20.000webhostapp.com/">albinanthony</a>
        </div>
      </div>
      <div className='' style={{position : 'absolute', top : '2rem', right : '2 rem'}} onClick={scrollToTop}>
         <Avatar style={{cursor : 'pointer !important'}} sx={{ width: 48, height: 48, backgroundColor: 'primary.main' }}>
           <ArrowUpwardIcon className='' sx={{ color: 'white' }} />
         </Avatar>
      </div>
    </div>
  </footer>
  )
}

export default FooterComponent