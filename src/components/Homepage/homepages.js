import React, { useState} from 'react';
import Navbar from './facenavbar';
import Hero from './facehero';
import Modal from './facemodal';
import './face.css';
import Slider from './Slider'; 
import Songs from './songs';
import TrendingSlider from './trendingslider';


function Homepages() {
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  const songs = [
    {
      name: "Wildflower",
      image: "/images/wildflower.jpg",
      link: "https://open.spotify.com/track/3QaPy1KgI7nu9FJEQUgn6h?si=uLszS_wdSXq0Yax74IElzQ",
    },
    {
      name: "Call out my name",
      image: "/images/TheWeekend.jpg",
      link: "https://open.spotify.com/track/09mEdoA6zrmBPgTEN5qXmN?si=TzHudeyBR4mfvYpVsDwpFQ",
    },
    {
      name: "White Mustang",
      image: "/images/WhiteMustang.jpg",
      link: "https://open.spotify.com/track/6eygbzyL6hY8jFQTARDuo9A?si=TNSDUVcsRdegbASLXx6a9A",
    },
    {
      name: "So long, London",
      image: "/images/Taylor.jpg",
      link: "https://open.spotify.com/track/7wAkQFShJ27V8362MqevQr?si=P9mZIztuSN68QjvjP146ow",
    },
    {
      name: "Pride",
      image: "/images/kendrick.jpg",
      link: "https://open.spotify.com/track/6IZvVAP7VPPnsGX6bvgkqg?si=avmycgOMQtmPNkac_yHGHg",
    },
    {
      name: "That's so true",
      image: "/images/Gracie.jpg",
      link: "https://open.spotify.com/track/7ne4VBA60CxGM75vw0EYad?si=xrrBRBTyQE6QqcRcgFwxsA",
    },
    {
      name: "Turning tables",
      image: "/images/Adele.jpg",
      link: "https://open.spotify.com/track/2eF2x1BkgilhaZ2AipRY8j?si=MKpnp1NkQ0yXoCn2tYK3TA",
    },
    {
      name: "Love on the brain",
      image: "/images/Rihana.jpg",
      link: "https://open.spotify.com/track/5oO3drDxtziYU2H1X23ZIp?si=SFrisOeTRK27pBsJPIRFnw",
    },
    {
      name: "Letter 2 my momma",
      image: "/images/21Savage.jpg",
      link: "https://open.spotify.com/track/55xNjVrGJxgqcEFqCyejTM?si=Hi11XHzASwKvNUn6Iz3-eQ",
    },
    {
      name: "Ya man Hawah",
      image: "/images/YA Man Hawah.jpg",
      link: "https://open.spotify.com/album/4woLzxI4whZalc0JEeWt4s?si=rhgib5pqQlC98_tbn7diMQ",
    },
    {
      name: "Ya ana ya la",
      image: "/images/Amr Diab.jpg",
      link: "https://open.spotify.com/track/4eL7MpDmxh1TKqmsOFG7zE?si=aCfacpwYTLaKP_xmWu8uJQ",
    },
    {
      name: "Basrah W Atooh",
      image: "/images/cairokee.jpg",
      link: "https://open.spotify.com/track/4vIbws1xp082bv0zl8vLaJ?si=cAqfHdPJSeafzX204GaXTA",
    },
  ];

  return (
    <div className='container-home'>
      <Navbar
        setShowAboutModal={setShowAboutModal}
        setShowContactModal={setShowContactModal} />
      <Hero />
      <Modal
        show={showAboutModal}
        onClose={() => setShowAboutModal(false)}
        title="About Us"
        content="Celestia is your one-stop destination for all the glamour and gossip you need." />
      <Modal
        show={showContactModal}
        onClose={() => setShowContactModal(false)}
        title="Contact Us"
        content="Reach out to us at contact@celestia.com." />
      <Slider title="Categories" link1="/athletes" image1="/images/messi.jpg"
        link2="/actors" image2="/images/trump.jpg"
        link3="/singers" image3="/images/drake.jpg" desc="Ctegories" />

       <TrendingSlider/>




      <Slider title="Latest News" link1="https://www.youtube.com/watch?v=EoT7K2Uj-9g" image1="/images/messi.jpg"
        link2="https://www.youtube.com/watch?v=EoT7K2Uj-9g" image2="/image/.jpg"
        link3="https://www.youtube.com/watch?v=EoT7K2Uj-9g" image3="/image/messi.jpg" desc="Latest news" />









      <Songs songs={songs} />


     

    </div>

  );
}




export default Homepages;
