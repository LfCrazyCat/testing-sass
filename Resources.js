import React from 'react';

const Resources = ({ category, data }) => {
  const filteredResources = data.filter(resource => resource.category === category);

  return (
    <div>
      <h1>Ressursarkiv for {category}</h1>
      <ul>
        {filteredResources.map((resource, index) => (
          <li key={index}>
            <a href={resource.url} target="_blank" rel="noopener noreferrer">
              {resource.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};