export default function TechnologyItem({ item }) {
  const { name, icon } = item;

  return (
    <div className="technology-item">
      <img src={icon} alt={`${name} logo`} />
      <span className="title">{name}</span>
    </div>
  );
}
