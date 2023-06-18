import { GithubSVG } from "./svg/GithubSVG";
import { LuisRLogo } from "./svg/LuisRLogo";

export function Footer() {
  return (
    <footer className="footer items-center text-center p-4 bg-base-300 text-secondary-content">
      <div className="items-center grid-flow-col justify-self-center md:justify-self-auto">
        <LuisRLogo />
        <p>Luis R.</p>
      </div>
      <div className="pl-2 text-xs justify-self-center">
        <p>
          This website is licensed under the GNU GPL license. For more
          information, please visit{" "}
          <a href="https://www.gnu.org/licenses/gpl-3.0.en.html">
            The GNU License.
          </a>
        </p>
      </div>

      <div className="grid-flow-col gap-2 justify-self-center md:place-self-center md:justify-self-end h-8 ">
        {/* github */}
        <a
          href="https://github.com/XiaoLuxtl/"
          target="_blank"
          className="w-8 h-8 cursor-pointer flex justify-center items-center"
          rel="noreferrer"
        >
          <div className="hover:text-primary">
            <GithubSVG />
          </div>
        </a>
        {/* linkdin */}
        <a
          href="https://www.linkedin.com/in/luis-rendon/"
          target="_blank"
          className="w-8 h-8 cursor-pointer flex justify-center items-center"
          rel="noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            className="fill-current w-6 h-6 transition-all origin-center hover:text-primary hover:w-8 hover:h-8"
            viewBox="0 0 448 512"
          >
            <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
          </svg>
        </a>
      </div>
    </footer>
  );
}
