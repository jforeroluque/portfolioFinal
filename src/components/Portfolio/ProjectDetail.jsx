import React from 'react';
import { useParams } from 'react-router-dom';
import { projectsData } from './Data';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData.find(p => p.id.toString() === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <section className="project-detail section">
      <div className="container">
        <h2 className="project-detail__title">{project.title}</h2>
        <img src={project.image} alt={project.title} className="project-detail__image" />
        <div className="project-detail__description">
          <p>{project.description}</p>
          {/* Add more detailed content as needed */}
        </div>
      </div>
    </section>
  );
}

export default ProjectDetail;