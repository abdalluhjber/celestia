import React from "react";
import "./bio.css";

const Bioo = (props) => {


  return (
    <div className="container-fluid">
      <h1 className="textphoto p-4">
      <span >|</span> Bio</h1>
      <div className="group">
        <div className="part-textBIO">
          <h3 style={{ margin: "10px" }}>Early Life and Background:</h3>
          <ul>
            <li>
              <h4>&#9830; Birth and upbringing:</h4>
              <ul>
                <li>&#9830; {props.birth}</li>
                <li>&#9830; {props.parents}</li>
              </ul>
            </li>
            <li>
              <h4>&#9830; Education:</h4>
              <ul>
                <li>&#9830; {props.school}</li>
                <li>&#9830; {props.university }</li>
              </ul>
            </li>
         
          </ul>

        </div>
        <div className="part-textBIO">
          <h3 style={{ margin: "10px" }}>Early Career and Breakthrough:</h3>
          <ul>
            <li>
              <h4>&#9830; Address:</h4>
              <ul>
                <li>&#9830; {props.address}</li>
             
              </ul>
            </li>
            <li>
              <h4>&#9830; Career before fame </h4>
              <ul>
                <li>&#9830; {props.careerbefore}</li>
              </ul>
            </li>
           
          </ul>
        </div>

        <div className="part-textBIO">
          <h3 style={{ margin: "10px" }}>Established Career and Personal Life:</h3>
          <ul>
            <li>
              <h4>&#9830; Career after fame:</h4>
              <ul>
                <li>&#9830; {props.firstcareer}</li>
                <li>&#9830; {props.currentcareer}</li>
       
              </ul>
            </li>
            <li>
              <h4>&#9830; Personal life:</h4>
              <ul>
                <li>&#9830; {props.marriages}</li>
                <li>&#9830; {props.children}</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Bioo;