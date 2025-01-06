import React from 'react';
import './Names.css';
import { Link } from 'react-router';

const Names = ({ names }) => (
  <div className="container">
    <div className="row g-4">
      {names.map((name, index) => (
        <div key={index} className="col-6 col-md-4 mb-4 ">
          <div className="card">
            <img src={name.images} className="img-fluid" alt={name.title} />
            <div className="darken">
              <Link to={name.title}>{name.title}</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Names;
