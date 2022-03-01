export default function ElementLayout(element) {
  const { media, title, text } = element;

  return (
    <div className="mainLayout">
      <h2>{title}</h2>
      <h3 className="description">{text}</h3>
      <div className="box">{media}</div>
    </div>
  );
}
