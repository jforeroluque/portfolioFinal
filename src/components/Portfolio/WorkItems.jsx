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
      <a 
        href={item.link}  // This connects to the link in your data.jsx
        target="_blank"  // Opens the link in a new tab
        rel="noopener noreferrer"  // Security feature to prevent the new page from accessing your original page
        className="work__button"
      >
        Demo / Repo
        <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
    </div>
  );
};

export default WorkItems;