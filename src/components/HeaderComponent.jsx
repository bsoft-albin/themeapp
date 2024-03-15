import React from 'react'
import styled from '@emotion/styled';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const HeaderComponent = ({refActivemenuFn, classActive}) => {

// Create a custom styled component for TwitterIcon
const StyledTwitterIcon = styled(TwitterIcon)`
  color: blue; /* Example styling */
  font-size: 24px; /* Example styling */
`;

// Create a custom styled component for FacebookIcon
const StyledFacebookIcon = styled(FacebookIcon)`
  color: #3b5998; /* Example styling */
  font-size: 24px; /* Example styling */
`;

// Create a custom styled component for InstagramIcon
const StyledInstagramIcon = styled(InstagramIcon)`
  color: #e4405f; /* Example styling */
  font-size: 24px; /* Example styling */
`;

// Create a custom styled component for LinkedInIcon
const StyledLinkedInIcon = styled(LinkedInIcon)`
  color: #0077b5; /* Example styling */
  font-size: 24px; /* Example styling */
`;

  return (
    <header id="header" className="fixed-top">
        <div className="container-fluid d-flex justify-content-between align-items-center">

            <h1 className="logo me-auto me-lg-0"><a className='pntr' onClick={() => refActivemenuFn('owner')}>Albin</a></h1>
        
            {/*<a href="index.html" className="logo"><img src="assets/img/logo.png" alt="" className="img-fluid"></img> </a>  */}
           
            <nav id="navbar" className="navbar order-last order-lg-0">
                <ul>
                  <li><a className={`pntr ${classActive === "owner" ? "active" : ""}`} onClick={() => refActivemenuFn('owner')}>Home</a></li>
                  <li><a className={`pntr ${classActive === "about" ? "active" : ""}`} onClick={() => refActivemenuFn('about')}>About</a></li>
                  <li><a className={`pntr ${classActive === "portfolio" ? "active" : ""}`} onClick={() => refActivemenuFn('portfolio')}>Portfolio</a></li>
                  <li><a className={`pntr ${classActive === "resume" ? "active" : ""}`} onClick={() => refActivemenuFn('resume')}>Resume</a></li>
                  <li><a className={`pntr ${classActive === "services" ? "active" : ""}`} onClick={() => refActivemenuFn('services')}>Services</a></li>
                  <li><a className={`pntr ${classActive === "blogs" ? "active" : ""}`} onClick={() => refActivemenuFn('blogs')}>Blogs</a></li>
                  <li><a className={`pntr ${classActive === "contact" ? "active" : ""}`} onClick={() => refActivemenuFn('contact')}>Contact</a></li>
                </ul>
                <i className="bi bi-list mobile-nav-toggle"></i>
            </nav>

            <div className="header-social-links">
                <StyledTwitterIcon className='pntr' />
                <StyledFacebookIcon className='pntr' />
                <StyledInstagramIcon className='pntr' />
                <StyledLinkedInIcon className='pntr' />
            </div>

        </div>

    </header>
  )
}

export default HeaderComponent