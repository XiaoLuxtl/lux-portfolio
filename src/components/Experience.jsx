import { Card } from "../ui/Card";
import { SectionTitle } from "../ui/SectionTitle";

export function Experience() {
  return (
    <div className="relative bg-base-200 w-full mt-12 pb-12 ">
      <div className="skewed bg-base-200 w-full h-64" />
      <div className="relative flex flex-col max-w-md md:max-w-xl lg:max-w-4xl py-24 justify-center items-center m-auto gap-12">
        <h2>
          <SectionTitle text={"EXPERIENCE"} />
        </h2>
        <Card
          title={"Decus High School - decus.mx"}
          img={"./imgs/decushome.jpg"}
          p={
            "A online platform that celebrates the power of inclusive education. In decus.mx believe in creating an environment where every learner is valued, supported, and given the tools they need to succeed"
          }
          linkText={"Visit"}
          link={"http://decus.mx/"}
        />

        <Card
          title={"Decus / Learn Managmen System"}
          img={"./imgs/decusplat.jpg"}
          p={
            "Implemented an online platform powered by Moodle. Through design adjustments, training, and a commitment to inclusive education, we have fostered an environment where every learner is valued, supported, and equipped for success."
          }
          linkText={"Visit"}
          link={"http://decus.mx/plataforma/"}
        />

        <Card
          title={"Website for Personal Growth and Mental Well-being"}
          img={"./imgs/psicdamaro.jpg"}
          p={
            "Psicologa Argelia D'Amaro, providing professional guidance to enhance emotional well-being and personal growth. Offering effective solutions, manage emotions, improve relationships, and achieve your goals through tailored therapy."
          }
          linkText={"Visit"}
          link={"https://psicologaargelia.com.mx/"}
        />
      </div>
    </div>
  );
}
