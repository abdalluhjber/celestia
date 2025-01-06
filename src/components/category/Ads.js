import './Ads.css';
import {actorsData,playersData,musiciansData} from "./Adsdata"
import React, { useState, useEffect } from "react";

const Ads = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 3; 

  const moveSlide = (step) => {
    let newIndex = currentIndex + step;
    if (newIndex >= totalSlides) {
      newIndex = 0;
    } else if (newIndex < 0) {
      newIndex = totalSlides - 1;
    }
    setCurrentIndex(newIndex);
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      moveSlide(1);
    }, 60000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div>

      <div className="slider-container">
        <div
          className="slider"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            '--total-slides': totalSlides, 
          }}
        >
          
          <div className="actors-element">
            <div className="box-name-character">
              <img src={props.imgprof1} className="img-to-brad" alt="Actor 1" />
              <h2 className="br-tx">{props.name1}</h2>
            </div>
            <p className="text1">
              {props.text1}<br />{props.text2}<br />{props.text3}<br />{props.text4}<br />{props.text5}
            </p>
            <div className="actors-brand">
              <h1 className="Ads">{props.nameads1}</h1>
              <img src={props.brand1} alt="Brand 1" className="imgbrand" />
              <img src={props.brand2} alt="Brand 2" className="imgbrand" />
            </div>
            <a href="https://www.chanel.com/us/fragrance/women/c/7x1x1x30/n5/" className="i-buy">
              <button className="buy">{props.buy1}</button>
            </a>
            <div className="actors-img">
              <img src={props.img1} alt="Actor 1" className="photo-personal" />
            </div>
          </div>

         
          <div className="actors-element">
            <div className="box-name-character">
              <img src={props.imgprof2} className="img-to-brad" alt="Actor 2" />
              <h2 className="br-tx">{props.name2}</h2>
            </div>
            <p className="text1">
              {props.text6}<br />{props.text7}<br />{props.text8}<br />{props.text9}<br />{props.text10}
            </p>
            <div className="actors-brand">
              <h1 className="Ads">{props.nameads2}</h1>
              <img src={props.brand3} alt="Brand 1" className="imgbrand" />
              <img src={props.brand4} alt="Brand 2" className="imgbrand" />
            </div>
            <a href="https://example.com" className="i-buy">
              <button className="buy">{props.buy2}</button>
            </a>
            <div className="actors-img">
              <img src={props.img2} alt="Actor 2" className="photo-personal" />
            </div>
          </div>

         
          <div className="actors-element">
            <div className="box-name-character">
              <img src={props.imgprof3} className="img-to-brad" alt="Actor 3" />
              <h2 className="br-tx">{props.name3}</h2>
            </div>
            <p className="text1">
              {props.text11}<br />{props.text12}<br />{props.text13}<br />{props.text14}<br />{props.text15}
            </p>
            <div className="actors-brand">
              <h1 className="Ads">{props.nameads3}</h1>
              <img src={props.brand5} alt="Brand 5" className="imgbrand" />
              <img src={props.brand6} alt="Brand 6" className="imgbrand" />
            </div>
            <a href="https://example.com" className="i-buy">
              <button className="buy">{props.buy3}</button>
            </a>
            <div className="actors-img">
              <img src={props.img3} alt="Actor 3" className="photo-personal" />
            </div>
          </div>
        </div>

       
        <button className="prev" onClick={() => moveSlide(-1)}>
          &#10094;
        </button>
        <button className="next" onClick={() => moveSlide(1)}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Ads;