//import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-award about__icon"></i>

        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">10 Yrs leading innovation teams</span>
      </div>

      <div className="about__box">
        <i className="bx bx-line-chart about__icon"></i>

        <h3 className="about__title">Results</h3>
        <span className="about__subtitle">Avg 12,5% Annual Revenue Growth</span>
      </div>

      <div className="about__box">
        <i className="bx bx-target-lock about__icon"></i>

        <h3 className="about__title">Delivery</h3>
        <span className="about__subtitle">Time to Market Avg. of 6 Months</span>
      </div>
    </div>
  );
};

export default Info;
