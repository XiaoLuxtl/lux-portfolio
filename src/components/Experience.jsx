import { Card } from "../ui/Card";
import { SectionTitle } from "../ui/SectionTitle";
import experience from "../mocks/experience";

export default function Experience() {
  return (
    <div className="relative bg-base-200 w-full mt-12 pb-12 ">
      <div className="skewed bg-base-200 w-full h-64" />
      <div className="relative flex flex-col max-w-md md:max-w-xl lg:max-w-4xl py-24 justify-center items-center m-auto gap-12">
        <h2>
          <SectionTitle text={"EXPERIENCE"} />
        </h2>
        {experience.map((item, index) => (
          <Card
            key={`E${index}`}
            title={item.title}
            img={item.img}
            p={item.p}
            linkText={item.linkText}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
}
