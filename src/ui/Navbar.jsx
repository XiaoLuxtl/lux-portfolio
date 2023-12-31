import { ToggleTheme } from "./ToggleTheme";
import { GithubSVG } from "./svg/GithubSVG";
import { LinkedinSVG } from "./svg/LinkedinSVG";
import { LuisRLogo } from "./svg/LuisRLogo";

export function Navbar() {
  return (
    <div className="navbar bg-base-100/30 backdrop-blur-xl backdrop-brightness-150 h-[80px] sticky top-0 z-10 ">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-2xl text-primary">
          <LuisRLogo /> Portfolio
        </a>
      </div>
      <div className="flex-none">
        <form
          action="https://www.linkedin.com/in/luis-rendon/"
          method="get"
          target="_blank"
        >
          <button className="btn btn-square btn-ghost">
            <LinkedinSVG />
          </button>
        </form>
        <form
          action="https://github.com/XiaoLuxtl/"
          method="get"
          target="_blank"
        >
          <button className="btn btn-square btn-ghost">
            <GithubSVG />
          </button>
        </form>
        <ToggleTheme />

        {/* <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            ></path>
          </svg>
        </button> */}
      </div>
    </div>
  );
}
