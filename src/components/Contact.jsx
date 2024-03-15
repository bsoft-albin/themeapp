import React, { useEffect, useState, useRef } from 'react'
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {getMyState, sendEmail} from '../state'
import emailjs from '@emailjs/browser'

const Contact = () => {

  //emailjs.send("service_1omvy3d","template_n9ravxj");

  const [contactObj, setcontactObj] = useState({
    to_name : '',
    email : '',
    message : '',
    subject : ''
  })

  const tmpdata = getMyState()

  function setData(e){
      contactObj[e.target.name] = e.target.value;
      setcontactObj(contactObj)
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_1omvy3d', 'template_ywlcw8j', form.current, {
        publicKey: 'SualJnAOj6nb4oWcS',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  

  useEffect(() =>{
    
  }, [])

  return (
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Contact</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>


        <div className="row mt-5">

          <div className="col-lg-4">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"><LocationOnIcon /></i>
                <h4>Location:</h4>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>

              <div className="email">
                <div className="address">
                  <i><EmailIcon /></i>
                  <h4>Email:</h4>
                  <p>A108 Adam Street, New York, NY 535022</p>
                </div>
              </div>

              <div className="phone">
                <i className="bi bi-phone"><PersonIcon /></i>
                <h4>Call:</h4>
                <p>+1 5589 55488 55s</p>
              </div>

            </div>

          </div>

          <div className="col-lg-8 mt-5 mt-lg-0">

            <form role="form" ref={form} className="php-email-form" onSubmit={sendEmail}>
              <div className="row">
                <div className="col-md-6 form-group">
                  <input type="text" name="to_name" onChange={setData} className="form-control" id="name" placeholder="Your Name" required />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" onChange={setData} className="form-control" name="email" id="email" placeholder="Your Email" required />
                </div>
              </div>
              <div className="form-group mt-3">
                <input type="text" className="form-control" onChange={setData} name="subject" id="subject" placeholder="Subject" required />
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" onChange={setData} name="message" rows="5" placeholder="Message" required></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>

          </div>

          <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31234.103287767026!2d78.89329209889267!3d11.886772199369783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1709709531075!5m2!1sen!2sin" width="600" height="450" style={{border : '0',width : '100%', height : '300px', marginTop : '2rem'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>

        </div>

      </div>

     
    </section>
  )
}

export default Contact