import "./App.css";
import { MainLayout } from "./Layout/MainLayout";
import { HeroText } from "./components/HeroText/HeroText";
import { Card } from "./ui/Card";
import { Hero } from "./ui/Hero";
import { CodeLaptop } from "./ui/svg/CodeLaptop";

export default function App() {
  return (
    <>
      <MainLayout>
        <Hero title={<HeroText />} p={<CodeLaptop />} />
        <div className="flex flex-col max-w-md md:max-w-xl lg:max-w-4xl py-24 justify-center items-center m-auto gap-12">
          <Card
            title={"Background Removal with Cloudinary"}
            img={
              "https://images.unsplash.com/photo-1682687982423-295485af248a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            }
            p={
              "Introducing a small project that harnesses the power of Cloudinary to effortlessly remove backgrounds from images. With the AI powered Cloudinary's advanced image processing capabilities do the work for you."
            }
            linkText={"Try it out!"}
            link={"https://xiaoluxtl.github.io/bg-remove/"}
          />

          <Card
            title={"ReactJS Memory Game"}
            img={
              "https://images.unsplash.com/photo-1682687982423-295485af248a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            }
            p={
              "Test your memory and have fun while matching pairs of cards featuring delightful images. Built with ReactJS, this interactive game offers an engaging and challenging experience for players of all ages."
            }
            linkText={"Try it out!"}
            link={"https://xiaoluxtl.github.io/bg-remove/"}
          />
        </div>
      </MainLayout>
    </>
  );
}
