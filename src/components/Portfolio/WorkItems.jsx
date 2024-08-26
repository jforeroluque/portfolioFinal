import React from "react";
import { Link } from "react-router-dom";

const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <Link to={`/project/${item.id}`}>
        <img src={item.image} alt={item.title} className="work__img" />
      </Link>
      <Link to={`/project/${item.id}`}>
        <h3 className="work__title">{item.title}</h3>
      </Link>
      <a href="#" className="work__button">
        Demo
        <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
    </div>
  );
};

export default WorkItems;