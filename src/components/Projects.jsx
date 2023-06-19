import { Card } from "../ui/Card";
import { SectionTitle } from "../ui/SectionTitle";

export function Projects() {
  return (
    <div className="relative bg-base-100 w-full">
      <div className="skewed bg-base-100 w-full h-64" />
      <div className="relative flex flex-col max-w-md md:max-w-xl lg:max-w-4xl py-24 justify-center items-center m-auto gap-12">
        <h2>
          <SectionTitle text={"PROJECTS"} />
        </h2>
        <Card
          title={"AI Background Removal with Cloudinary"}
          img={"./imgs/bgremove.jpg"}
          p={
            "Introducing a small project that harnesses the power of Cloudinary to effortlessly remove backgrounds from images. With the AI powered Cloudinary's advanced image processing capabilities do the work for you."
          }
          linkText={"Try it out!"}
          link={"https://xiaoluxtl.github.io/bg-remove/"}
          linkGithub={"https://github.com/XiaoLuxtl/bg-remove"}
        />

        <Card
          title={"ReactJS Memory Game"}
          img={"./imgs/memorama.jpg"}
          p={
            "Test your memory and have fun while matching pairs of cards featuring delightful images. Built with ReactJS, this interactive game offers an engaging and challenging experience for players of all ages."
          }
          linkText={"Try it out!"}
          link={"https://xiaoluxtl.github.io/memorama-react/"}
          linkGithub={"https://github.com/XiaoLuxtl/memorama-react"}
        />

        <Card
          title={"ReactJS Meme Generator"}
          img={"./imgs/memegen.jpg"}
          p={
            "Meme Generator project built with ReactJS and JavaScript. Unleash your creativity and sense of humor as you effortlessly create hilarious memes in just a few clicks. Add custom captions, this project empowers you to express yourself and share the laughter with friends and family."
          }
          linkText={"Try it out!"}
          link={"https://xiaoluxtl.github.io/meme-gen-localst/"}
          linkGithub={"https://github.com/XiaoLuxtl/meme-gen-localst"}
        />
      </div>
    </div>
  );
}
