import { GithubSVG } from "./svg/GithubSVG";
import { LinkedinSVG } from "./svg/LinkedinSVG";
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
          <div className="hover:text-primary">
            <LinkedinSVG />
          </div>
        </a>
      </div>
    </footer>
  );
}
