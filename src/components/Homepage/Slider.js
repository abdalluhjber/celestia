import React from "react";
import { Link } from "react-router";
import "./slider.css"
const Slider = (props) =>{
    return(
      
<div className="news px-5 mt-5">

  <div id="carouselExampleCaptions" className="carousel slide">
  <h2 style={{ textAlign: "center" }}>{props.title}</h2>
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
   
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <Link to={props.link1}>
        <img src={props.image1} className="d-block w-100 rounded" alt={props.desc} />
      </Link>
    

      <div className="carousel-caption d-none d-md-block">
      </div>
    </div>
    <div className="carousel-item">
      <Link to={props.link2}>
    <img src={props.image2} className="d-block w-100 rounded" alt={props.desc} />
    </Link>
      <div className="carousel-caption d-none d-md-block">
      </div>
    </div>
    <div className="carousel-item">
      <Link to={props.link3}>
         <img src={props.image3} className="d-block w-100 rounded" alt={props.desc} />
      </Link>
   

      <div class="carousel-caption d-none d-md-block">
        
      </div>
    </div>
    
    
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
   
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
   
  </button>
  </div>
</div>


       
    )
};
export default Slider;