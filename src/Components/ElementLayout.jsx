export default function ElementLayout(element) {
  const { id, title, text } = element;

  return (
    <div id={id}>
      <h1>{title}</h1>
      <p className="description">{text}</p>
      <div className="box"></div>
    </div>
  );
}
