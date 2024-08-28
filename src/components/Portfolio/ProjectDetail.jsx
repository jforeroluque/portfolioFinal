import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { projectsData } from "./Data";
import "./projectDetail.css";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id.toString() === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return <div className="project-not-found">Project not found</div>;
  }

  return (
    <section className="project-detail section">
      <h2 className="section__title">{project.title}</h2>
      <span className="section__subtitle">{project.subtitle}</span>

      <div className="project-detail__container container grid">
        <img src={project.image} alt={project.title} className="project-detail__img" />

        <div className="project-detail__data">
          <div className="project-detail__info grid">
            <div className="project-detail__box">
              <div className="project-detail__item">
                <h3 className="project-detail__title">Technologies:</h3>
                <p className="project-detail__subtitle">
                  {project.technologies.join(", ")}
                </p>
              </div>
              <div className="project-detail__item">
                <h3 className="project-detail__title">GitHub Link:</h3>
                <p className="project-detail__subtitle">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-detail__link">
                    {project.link}
                  </a>
                </p>
              </div>
            </div>

            <div className="project-detail__box">
              <i className="uil uil-lightbulb-alt project-detail__icon"></i>
              <h3 className="project-detail__title">Business Problem</h3>
              <p className="project-detail__subtitle">{project.businessProblem}</p>
            </div>

            <div className="project-detail__box">
              <i className="uil uil-bullseye project-detail__icon"></i>
              <h3 className="project-detail__title">Objective</h3>
              <p className="project-detail__subtitle">{project.objective}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Approach and Key Insights Section */}
      <div className="project-detail__approach container grid">
        <div className="project-detail__approach-box">
          <h3 className="project-detail__subtitle-title">Methodology</h3>
          <ul className="project-detail__list">
            {project.methodology.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
        </div>

        <div className="project-detail__approach-box">
          <h3 className="project-detail__subtitle-title">Key Insights</h3>
          <ul className="project-detail__list">
            {project.keyInsights.map((insight, index) => (
              <li key={index}>{insight}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Impact and Strategic Recommendations Section */}
      <div className="project-detail__impact container grid">
        <h3 className="project-detail__impact-title">Business Impact</h3>
        <div className="project-detail__impact-boxes grid">
          {project.businessImpact.map((impact, index) => (
            <div key={index} className="project-detail__impact-box">
              <i className="uil uil-chart-bar project-detail__impact-icon"></i>
              <h3 className="project-detail__impact-box-title">{impact.title}</h3>
              <p className="project-detail__impact-box-subtitle">{impact.description}</p>
            </div>
          ))}
        </div>
        <h3 className="project-detail__impact-title">Recommendations</h3>
        <div className="project-detail__recommendations">
          {project.recommendations.map((recommendation, index) => (
            <p key={index}>{index + 1}. {recommendation}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;