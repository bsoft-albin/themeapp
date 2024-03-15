import React, { useEffect, useState } from 'react'
import portimage1 from '../assets/img/portfolio/portfolio-1.jpg'
import portimage2 from '../assets/img/portfolio/portfolio-2.jpg'
import portimage3 from '../assets/img/portfolio/portfolio-3.jpg'
import portimage4 from '../assets/img/portfolio/portfolio-4.jpg'

import PortfolioCards from './subComponents/PortfolioCards'


const Portfolio = () => {

  const [activeTab, setactiveTab] = useState(1)

  const [imagesArray, setimagesArray] = useState([])

  const setClicktab = (tid,ary) =>{
    setactiveTab(tid)
    setimagesArray(ary)
  }

  const imageObj = {
    imgnew : { 
      img1 : [{
        imgSrc : portimage1,
        imgTitle : 'image 1',
        imgSubTitle : 'subtitle 1'
      },{
        imgSrc : portimage2,
        imgTitle : 'image 2',
        imgSubTitle : 'subtitle 2'
      },
      {
        imgSrc : portimage3,
        imgTitle : 'image 3',
        imgSubTitle : 'subtitle 3'
      },
      {
        imgSrc : portimage4,
        imgTitle : 'image 4',
        imgSubTitle : 'subtitle 4'
      },
      {
        imgSrc : portimage4,
        imgTitle : 'image 4',
        imgSubTitle : 'subtitle 4'
      },
      ],
      img2 : [{
        imgSrc : portimage3,
        imgTitle : 'image 1',
        imgSubTitle : 'subtitle 1'
      },{
        imgSrc : portimage2,
        imgTitle : 'image 2',
        imgSubTitle : 'subtitle 2'
      },
      {
        imgSrc : portimage1,
        imgTitle : 'image 3',
        imgSubTitle : 'subtitle 3'
      },
      {
        imgSrc : portimage4,
        imgTitle : 'image 4',
        imgSubTitle : 'subtitle 4'
      },
      ],
      img3 : [{
        imgSrc : portimage4,
        imgTitle : 'image 1',
        imgSubTitle : 'subtitle 1'
      },{
        imgSrc : portimage3,
        imgTitle : 'image 2',
        imgSubTitle : 'subtitle 2'
      },
      {
        imgSrc : portimage1,
        imgTitle : 'image 3',
        imgSubTitle : 'subtitle 3'
      },
      {
        imgSrc : portimage2,
        imgTitle : 'image 4',
        imgSubTitle : 'subtitle 4'
      },
      ],
      img4 : [{
        imgSrc : portimage2,
        imgTitle : 'image 1',
        imgSubTitle : 'subtitle 1'
      },{
        imgSrc : portimage4,
        imgTitle : 'image 2',
        imgSubTitle : 'subtitle 2'
      },
      {
        imgSrc : portimage1,
        imgTitle : 'image 3',
        imgSubTitle : 'subtitle 3'
      },
      {
        imgSrc : portimage4,
        imgTitle : 'image 4',
        imgSubTitle : 'subtitle 4'
      },
      {
        imgSrc : portimage3,
        imgTitle : 'image 4',
        imgSubTitle : 'subtitle 4'
      },
      ]
    }
  }

  useEffect(() =>{
    setimagesArray(imageObj.imgnew.img1)
  }, [])

  return (
    <section id="portfolio" className="portfolio">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Portfolio</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" onClick={() =>setClicktab(1, imageObj.imgnew.img1)} className={activeTab == 1 ? "filter-active" : ""}>All</li>
              <li data-filter=".filter-app" onClick={() =>setClicktab(2, imageObj.imgnew.img2)} className={activeTab == 2 ? "filter-active" : ""}>App</li>
              <li data-filter=".filter-card" onClick={() =>setClicktab(3, imageObj.imgnew.img3)} className={activeTab == 3 ? "filter-active" : ""}>Card</li>
              <li data-filter=".filter-web" onClick={() =>setClicktab(4, imageObj.imgnew.img4)} className={activeTab == 4 ? "filter-active" : ""}>Web</li>
            </ul>
          </div>
        </div>

        <div className='row' data-aos="fade-up" data-aos-delay="200">

          {imagesArray.map((image, index) => (
            <div className='col-sm-3'>
              <PortfolioCards skey={index} imgSrc={image.imgSrc} imgTitle={image.imgTitle} imgSubTitle={image.imgSubTitle} />
            </div>
            
          ))}

        </div>

      </div>
    </section>
  )
}

export default Portfolio





    

