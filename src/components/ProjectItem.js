import React from "react";

function ProjectItem({ name, about, technologies }) {
  const technologyTag = technologies.map((technology, index) => <span key={index}>{technology}</span>)

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologyTag}
      </div>
    </div>
  );
}

export default ProjectItem;
