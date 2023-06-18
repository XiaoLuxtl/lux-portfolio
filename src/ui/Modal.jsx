import { useId } from "react";

/* eslint-disable react/prop-types */
export function Modal({ title, p, linkText, link }) {
  const modalId = useId();
  return (
    <>
      {/* You can open the modal using ID.showModal() method */}
      <button
        className="btn btn-primary"
        onClick={() => (console.log(modalId), window.modalId.showModal())}
      >
        {linkText}
      </button>
      <dialog id={modalId} className="modal">
        <form
          method="dialog"
          className="modal-box bg-base-100 relative h-[90vh] min-w-[80vw]"
        >
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4 text-xs">
            Press ESC key or click on ✕ button to close
          </p>
          <p>{p}</p>
          <iframe
            className="w-full h-[85%]"
            src={link}
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </form>
      </dialog>
    </>
  );
}
