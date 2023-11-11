import React from 'react'
import flowerBackground from '../assets/flowerBackground.png';
import rainbowBackground from '../assets/rainbowBackground.png';
import './pagesStyles.css';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';

const About = () => {
  return (
    <div>
        <div className="welcomeSection">
            <img src={flowerBackground} alt="Flower background" width="100%"/>
              <div className="welcomeText">
                <h1 className="mb-4">Welcome!</h1>
                <p>At Cozy Stitches, our journey began with a love 
                  for all things yarn and a deep-seated desire to 
                  spread happiness through our creations. What 
                  started as a personal hobby quickly blossomed 
                  into a heartfelt mission to craft unique, lovable 
                  dolls that capture the essence of childhood wonder 
                  and nostalgia.</p>
                </div>
        </div>
         <div className="contactSection">
            <img src={rainbowBackground} alt="Rainbow background" width="100%"/>
            <div className="contactText">
              <h3 className="mb-4">Get in Touch</h3>
              <p>Have a question or a special request? We'd love to 
                hear from you! Reach out to us or follow us on social 
                media for the latest updates and behind-the-scenes 
                peeks into the world of Cozy Stitches.

                Thank you for being a part of our journey. 
                Together, let's weave memories and moments 
                that last a lifetime.
              </p>
              <div className="socialIcons">
                <a href="https://facebook.com">
                  <FacebookIcon fontSize="large"/>
                </a>
                <a href="https://instagram.com">
                  <InstagramIcon fontSize="large"/>
                </a>
                <a href="https://pinterest.com">
                  <PinterestIcon fontSize="large"/>
                </a>
                <a href="https://x.com">
                  <TwitterIcon fontSize="large"/>
                </a>
              </div>
            </div>
          <div/>
        </div>
    </div>
  )
}

export default About;