import React from "react";

import "./App.css";
import { MainLayout } from "./layout/MainLayout";
import { Loading } from "./ui/Loading";

const Hero = React.lazy(() => import("./components/Hero"));
const HeroText = React.lazy(() => import("./ui/HeroText/HeroText"));
const CodeLaptop = React.lazy(() => import("./ui/svg/CodeLaptop"));

const LuisR = React.lazy(() => import("./components/LuisR"));
const Experience = React.lazy(() => import("./components/Experience"));
const Projects = React.lazy(() => import("./components/Projects"));

export default function App() {
  return (
    <>
      <MainLayout>
        <React.Suspense fallback={<Loading />}>
          <Hero title={<HeroText />} p={<CodeLaptop />} />
          <React.Suspense fallback={<Loading />}>
            <LuisR />
            <React.Suspense fallback={<Loading />}>
              <Experience />
              <Projects />
            </React.Suspense>
          </React.Suspense>
        </React.Suspense>
      </MainLayout>
    </>
  );
}
