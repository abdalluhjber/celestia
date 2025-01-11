import React from "react";
import Names from "./Names";
import {actorsData,playersData,musiciansData} from "./Adsdata"
import Ads from "./Ads"
const Categorypage = ({category}) => {
  const categories = {
    singers: [
    { title: 'Adele', images: '/images/adele bw.jpeg' },
    { title: 'Billie Eilish', images: '/images/Bellie Eilish bw.jpeg' },
    { title: 'Taylor Swift', images: '/images/tylor.jpeg' },
    { title: 'The Weeknd', images: '/images/the weeknd bw.jpeg' },
    { title: 'Lana Del Rey', images: '/images/lana del rey bw.jpeg' },
    { title: 'Rihanna', images: '/images/Rihanna bw.jpeg' },
  ],
    actors: [
    { title: 'Brad Pitt', images: '/images/Brad Pitt BW.jpeg' },
    { title: 'Theo James', images: '/images/theooo.jpeg' },
    { title: 'Jenna Ortega', images: '/images/Jenna Ortega bw.jpeg' },
    { title: 'Angelina Jolie', images: '/images/Angelina Jolie.jpeg' },
    { title: 'Morgan Freeman', images: '/images/Morgan Freeman.jpeg' },
    { title: 'Millie Brown', images: '/images/millie brown.jpeg' },
  ],
    athletes: [
    { title: 'Lionel Messi', images: '/images/Messi bw ss.jpeg' },
    { title: 'Michael Jordan', images: '/images/Michael Jordan bw.jpeg' },
    { title: 'Muhammad Ali', images: '/images/Muhammad Ali bw.jpeg' },
    { title: 'Alexia Putellas', images: '/images/Alexia Putellas bw.jpeg' },
    { title: 'Lewis Hamilton', images: '/images/Lewis Hamilton bw.jpeg' },
    { title: 'Cristiano Ronaldo', images: '/images/Cristiano Ronaldo Wallpaper 🇵🇹.jpeg' },
  ],
}
const adsData = {
  actors: actorsData,
  athletes: playersData,
  singers: musiciansData,
};
  return(
    <div>
      <Ads {...adsData[category]} />
      <br></br>
      <Names names={categories[category]} />
    </div>
  )
}
export default Categorypage;