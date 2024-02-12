import React from 'react';

const Resources = ({ category, data }) => {
  return (
    <div>
      <h1>Ressursarkiv for {category]</h1>
      <ul>
        {data.map((resources, index) => (
          <li key={index}>{resources.name}</li>
        ))}
      </ul>
    </div>
  );
};