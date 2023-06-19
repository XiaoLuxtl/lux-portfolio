import "./App.css";
import { MainLayout } from "./Layout/MainLayout";
import { Experience } from "./components/Experience";
import { HeroText } from "./components/HeroText/HeroText";
import { LuisR } from "./components/LuisR";
import { Projects } from "./components/Projects";
import { Hero } from "./ui/Hero";
import { CodeLaptop } from "./ui/svg/CodeLaptop";

export default function App() {
  return (
    <>
      <MainLayout>
        <Hero title={<HeroText />} p={<CodeLaptop />} />
        <LuisR />
        <Experience />
        <Projects />
      </MainLayout>
    </>
  );
}
