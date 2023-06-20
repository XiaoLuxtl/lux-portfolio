/* eslint-disable react/prop-types */
import { useContext } from "react";

import { GithubSVG } from "./svg/GithubSVG";
import { ModalContext } from "../Context/ModalContext";

export function Card({ title, img, p, linkText, link, linkGithub }) {
  const { handleModal } = useContext(ModalContext);

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl glass">
      <figure className="w-full md:w-5/12">
        <img
          className="h-full"
          src={img}
          alt={`Github project preview image for the project ${title}`}
        />
      </figure>
      <div className="card-body w-full md:w-7/12">
        <h2 className="card-title font-bold">{title}</h2>
        <p className="py-2">{p}</p>
        <div className="card-actions justify-end">
          {/* <Modal title={title} p={p} linkText={linkText} link={link} /> */}
          <div className="flex flex-row gap-2">
            {linkGithub && (
              <form action={linkGithub} method="get" target="_blank">
                <button className="btn btn-primary hover:text-accent-focus w-16">
                  <GithubSVG />
                </button>
              </form>
            )}

            {/* Not github link and website link open the website */}

            {!linkGithub && link ? (
              <a
                className="btn btn-primary hover:text-accent-focus w-16"
                href={link}
                target="_blank"
                rel="noreferrer"
              >
                {linkText}
              </a>
            ) : (
              <button
                className="btn btn-primary hover:text-accent-focus"
                onClick={() =>
                  handleModal(
                    <ContentComponent p={p} title={title} link={link} />
                  )
                }
              >
                {linkText}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function ContentComponent({ p, title, link }) {
  return (
    <div>
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="py-4 text-xs">
        Press ESC key or click on ✕ button to close.{" "}
        <a
          className="link-primary"
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          Open in new window.
        </a>
      </p>
      <p>{p}</p>
      <iframe
        className="w-full h-full min-h-[70vh]"
        src={link}
        frameBorder="0"
        scrolling="no"
      ></iframe>
    </div>
  );
}
