export default function ElementLayout(element) {
  const { media, title, text } = element;

  return (
    <>
      <h1>{title}</h1>
      <p className="description">{text}</p>
      <div className="box">{media}</div>
    </>
  );
}
