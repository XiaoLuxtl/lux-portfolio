/* eslint-disable react/prop-types */
import { useState, useContext } from "react";

import { Modal } from "./Modal";
import { Modal2 } from "./Modal2";
import { GithubSVG } from "./svg/GithubSVG";
import { ModalContext } from "../Context/ModalContext";

export function Card({ title, img, p, linkText, link }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const { handleModal } = useContext(ModalContext);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl glass">
      <figure className="w-5/12">
        <img
          className="h-full"
          src={img}
          alt={`Github project preview image for the project ${title}`}
        />
      </figure>
      <div className="card-body w-7/12">
        <h2 className="card-title font-bold">{title}</h2>
        <p>{p}</p>
        <div className="card-actions justify-end">
          {/* <Modal title={title} p={p} linkText={linkText} link={link} /> */}
          <div className="flex flex-row gap-2">
            <button className="btn btn-primary hover:text-accent-focus w-16">
              <GithubSVG />
            </button>
            <button
              className="btn btn-primary hover:text-accent-focus"
              onClick={handleOpenModal}
            >
              {linkText}
            </button>
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
