/* eslint-disable react/prop-types */
import { useState } from "react";

import { Modal } from "./Modal";
import { Modal2 } from "./Modal2";

export function Card({ title, img, p, linkText, link }) {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl glass">
      <figure>
        <img
          className="h-full"
          src={img}
          alt={`Github project preview image for the project ${title}`}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{p}</p>
        <div className="card-actions justify-end">
          {/* <Modal title={title} p={p} linkText={linkText} link={link} /> */}
          <div>
            <button onClick={handleOpenModal}>Open Modal</button>
            <Modal2
              className="fixed top-0 left-0"
              isOpen={isModalOpen}
              onClose={handleCloseModal}
            >
              <h3 className="font-bold text-lg">{title}</h3>
              <p>{p}</p>
              <iframe
                className="w-full h-full"
                src={link}
                frameBorder="0"
                scrolling="yes"
              ></iframe>
            </Modal2>
          </div>
        </div>
      </div>
    </div>
  );
}
