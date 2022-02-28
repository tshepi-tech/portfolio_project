import ReactDOM from "react-dom";

export default function Modal({ showModal, children, onClose }) {
  if (!showModal) return null;
  return ReactDOM.createPortal(
    <>
      <div className="overlay_styles">
        <div className="modal_styles">
          <button onClick={onClose}>Close modal</button>
          {children}
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}
