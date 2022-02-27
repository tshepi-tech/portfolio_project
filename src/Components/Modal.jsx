export default function Modal({ showModal, children, onClose }) {
  if (!showModal) return null;
  return (
    <>
      <div className="Overlay_style" />
      <div className="Modal_styles">
        <button onClick={onClose}>Close modal</button>
        {children}
      </div>
    </>
  );
}
