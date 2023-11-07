import React from 'react'
import flowerBackground from '../assets/flowerBackground.png';
import rainbowBackground from '../assets/rainbowBackground.png';
import Contact from './Contact';


import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Pin, Twitter } from '@mui/icons-material';

const About = () => {
  return (
    <>
        <div>
            <img src={flowerBackground} alt="Flower background"/>
            <h1>Welcome!</h1>
            <p>At Cozy Stitches, our journey began with a love 
                for all things yarn and a deep-seated desire to 
                spread happiness through our creations. What 
                started as a personal hobby quickly blossomed 
                into a heartfelt mission to craft unique, lovable 
                dolls that capture the essence of childhood wonder 
                and nostalgia.</p>
        </div>
         <div>
            <img src={rainbowBackground} alt="Rainbow background"/>
            <h3>Get in Touch</h3>
            <p>Have a question or a special request? We'd love to 
                hear from you! Reach out to us or follow us on social 
                media for the latest updates and behind-the-scenes 
                peeks into the world of Cozy Stitches.

                Thank you for being a part of our journey. 
                Together, let's weave memories and moments 
                that last a lifetime.
                </p>
         </div>
         <div>
            <FacebookIcon fontSize="large"/>
            <InstagramIcon fontSize="large"/>
            <PinterestIcon fontSize="large"/>
            <TwitterIcon fontSize="large"/>
         </div>
    </>
  )
}

export default About;