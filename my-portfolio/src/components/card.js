import React from 'react';

const Card = ({
  title = '',
  image = '',
  description = '',
  tags = [],
  repoUrl = '',
  demoUrl = '',
}) => {
  return (
    <div className="max-w-sm overflow-hidden rounded-lg bg-white text-gray-900 shadow-lg">
      {image && <img src={image} alt={title} className="h-48 w-full object-cover" />}
      <div className="p-4">
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <p className="mb-4 text-gray-700">{description}</p>
        <div className="mb-4 flex flex-wrap gap-2">
          {tags.map(tag => (
            <span
              key={tag.id}
              className="rounded-full bg-teal-100 px-3 py-1 text-sm text-teal-700"
            >
              {tag.name}
            </span>
          ))}
        </div>
        <div className="flex justify-between">
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded bg-gray-700 px-4 py-2 text-white hover:bg-gray-900"
          >
            GitHub
          </a>
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded bg-teal-600 px-4 py-2 text-white hover:bg-teal-700"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
