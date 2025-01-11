import React from "react";

const OverViewphtot = (props) => {
  return (
    <div className="container-fluid">
        <div  className="page-overphoto">
        <div  className="page-info">
      <div className="row justify-content-between">
        <div className="col-sm-5">
          <div>
            <h1 className="textphoto p-4">
              | Overview
            </h1>
            <ul className="bio">
              <li><b>Born:</b> {props.born}</li>
              <li><b>Birth name:</b> {props.birthname}</li>
              <li><b>Nickname:</b> {props.nickname}</li>
              <li><b>Height:</b> {props.height}</li>
            </ul>
          </div>
        </div>

        <div className="col-sm-5">
          <div className="photo-vv">
            <h1 className="textphoto p-4">
              <span>|</span> Photos
            </h1>
            <div className="position-img">
              <div className="all-img">
                <div className="animation-img">
                  <img src={props.img1} alt="Image 1" />
                  <img src={props.img2} alt="Image 2" />
                  <img src={props.img3} alt="Image 3" />
                  <img src={props.img4} alt="Image 4" />
                  <img src={props.img5} alt="Image 5" />
                  <img src={props.img6} alt="Image 6" />
                  <img src={props.img7} alt="Image 7" />
                  <img src={props.img8} alt="Image 8" />
                  <img src={props.img9} alt="Image 9" />
                  <img src={props.img10} alt="Image 10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
    </div>
  );
};

export default OverViewphtot;