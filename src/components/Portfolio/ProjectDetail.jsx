import React from "react";
import { useParams } from "react-router-dom";
import { projectsData } from "./Data";
import "./projectDetail.css";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id.toString() === id);

  if (!project) {
    return <div className="project-not-found">Project not found</div>;
  }

  return (
    <section className="project-detail section">
      <h2 className="section__title">{project.title}</h2>
      <span className="section__subtitle">Strategic Challenge & Objectives</span>

      <div className="project-detail__container container grid">
        <img src={project.image} alt={project.title} className="project-detail__img" />

        <div className="project-detail__data">
          <div className="project-detail__info grid">
            <div className="project-detail__box">
             <div className="project-detail__item">
               <h3 className="project-detail__title">Technologies:</h3>
               <p className="project-detail__subtitle">React, Node.js, AWS</p>
             </div>
             <div className="project-detail__item">
                <h3 className="project-detail__title">GitHub Link:</h3>
                <p className="project-detail__subtitle">
                  <a href="https://github.com/your-project-link" target="_blank" rel="noopener noreferrer" className="project-detail__link">
                   https://github.com/your-project-link
                  </a>
                </p>
              </div>          
          </div>

            <div className="project-detail__box">
              <i className="uil uil-lightbulb-alt project-detail__icon"></i>
              <h3 className="project-detail__title">Business Problem</h3>
              <p className="project-detail__subtitle">Improving conversion rates</p>
            </div>

            <div className="project-detail__box">
              <i className="uil uil-bullseye project-detail__icon"></i>
              <h3 className="project-detail__title">Objective</h3>
              <p className="project-detail__subtitle">Increase user engagement</p>
            </div>
          </div>
        </div>
      </div>

      {/* Approach and Key Insights Section */}
      <div className="project-detail__approach container grid">
        <div className="project-detail__approach-box">
          <h3 className="project-detail__subtitle-title">Methodology</h3>
          <ul className="project-detail__list">
            <li>Step 1: Identify key metrics</li>
            <li>Step 2: Analyze user data</li>
            <li>Step 3: Implement A/B testing</li>
          </ul>
        </div>

        <div className="project-detail__approach-box">
          <h3 className="project-detail__subtitle-title">Key Insights</h3>
          <ul className="project-detail__list">
            <li>Insight 1: User engagement increased by 20%</li>
            <li>Insight 2: Conversion rates improved by 15%</li>
            <li>Insight 3: The bounce rate decreased by 10%</li>
          </ul>
        </div>
      </div>

      {/* Impact and Strategic Recommendations Section */}
      <div className="project-detail__impact container grid">
        <h3 className="project-detail__impact-title">Business Impact</h3>
        <div className="project-detail__impact-boxes grid">
          <div className="project-detail__impact-box">
            <i className="uil uil-chart-bar project-detail__impact-icon"></i>
            <h3 className="project-detail__impact-box-title">Impact 1</h3>
            <p className="project-detail__impact-box-subtitle">Revenue increased by 10%</p>
          </div>
          <div className="project-detail__impact-box">
            <i className="uil uil-thumbs-up project-detail__impact-icon"></i>
            <h3 className="project-detail__impact-box-title">Impact 2</h3>
            <p className="project-detail__impact-box-subtitle">Customer satisfaction improved by 15%</p>
          </div>
          <div className="project-detail__impact-box">
            <i className="uil uil-moneybag project-detail__impact-icon"></i>
            <h3 className="project-detail__impact-box-title">Impact 3</h3>
            <p className="project-detail__impact-box-subtitle">Cost savings of 5%</p>
          </div>
        </div>

        <h3 className="project-detail__impact-title">Recommendations</h3>
        <div className="project-detail__recommendations">
          <p>1. Continue to monitor and optimize conversion rates using real-time data analytics.</p>
          <p>2. Implement further A/B testing to refine customer engagement strategies.</p>
          <p>3. Invest in customer feedback tools to gather more insights for future improvements.</p>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;