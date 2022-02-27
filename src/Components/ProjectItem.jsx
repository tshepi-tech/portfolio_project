import React from "react";

export default function ProjectItem({ project, setShowModal }) {
  const { id, name, uploaded } = project;

  return (
    <div>
      <button onClick={() => setShowModal(true)}>{name}</button>
    </div>
  );
}
