import React from "react";

export default function ProjectItem({ project }) {
  const { id, name, uploaded } = project;

  return (
    <div>
      <button>{name}</button>
    </div>
  );
}
