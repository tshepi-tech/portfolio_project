// Function arguments -1
// You are passing 4 items instead of the limit of 3
export default function ProjectItem({ item }) {
  const { name, picture } = item;

  return (
    <div className="displayCards-box">
      <div className="displayCards-outer">
        <button
          className="displayCards"
          onClick={() => setModal(<ModalProject item={item} />)}
        >
          {name}
        </button>
      </div>
    </div>
  );
}
