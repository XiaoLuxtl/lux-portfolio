/* eslint-disable react/prop-types */
import "daisyui/dist/full.css";

export function Modal2({ isOpen, onClose, children }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="flex items-center justify-center z-50">
      <div className="modal-box bg-base-100 relative h-[90vh] min-w-[80vw]">
        <div className="modal-content">{children}</div>
        <button
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={onClose}
        >
          ✕
        </button>
      </div>
    </div>
  );
}
