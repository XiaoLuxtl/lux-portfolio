import { SectionTitle } from "../ui/SectionTitle";
import { GithubSVG } from "../ui/svg/GithubSVG";
import { LinkedinSVG } from "../ui/svg/LinkedinSVG";

export function LuisR() {
  return (
    <div className="relative bg-base-100 w-full mt-12 pt-6">
      <div className="skewed bg-base-100 w-full h-64" />
      <div className="relative flex flex-col max-w-md md:max-w-xl lg:max-w-4xl pb-24 justify-center items-center m-auto gap-12">
        <h2>
          <a
            href="https://www.linkedin.com/in/luis-rendon/"
            target="_blank"
            rel="noreferrer"
          >
            <SectionTitle text={"LUIS R."} />
          </a>
        </h2>
        <h4 className="mt-[-2.5rem] text-primary text-xl font-semibold tracking-wide">
          Web Developer
        </h4>
        <p className="mt-[-2rem] max-w-md text-center text-lg">
          Developing products that embrace accessibility, making technology more
          inclusive for everyone.
        </p>
        <div className="flex gap-2 mt-[-1.5rem]">
          <form
            action="https://www.linkedin.com/in/luis-rendon/"
            method="get"
            target="_blank"
          >
            <button className="btn btn-primary hover:text-accent-focus w-16">
              <LinkedinSVG />
            </button>
          </form>
          <form
            action="https://github.com/XiaoLuxtl/"
            method="get"
            target="_blank"
          >
            <button className="btn btn-primary hover:text-accent-focus w-16">
              <GithubSVG />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
