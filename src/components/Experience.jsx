import { Card } from "../ui/Card";
import { SectionTitle } from "../ui/SectionTitle";
import initialData from "../mocks/experience";
import { usePagination } from "../hooks/usePagination";
import { Pagination } from "../ui/Pagination";

export default function Experience() {
  const itemsPerPage = 3;

  const { getCurrentData, handlePageChange } = usePagination({
    initialData,
    itemsPerPage,
  });

  return (
    <div className="relative bg-base-200 w-full mt-12 pb-12 ">
      <div className="skewed bg-base-200 w-full h-64" />
      <div className="relative flex flex-col max-w-md md:max-w-xl lg:max-w-4xl py-24 justify-center items-center m-auto gap-12">
        <h2>
          <SectionTitle text={"EXPERIENCE"} />
        </h2>
        {/* Renderiza los datos de la página actual */}
        {getCurrentData().map((item, index) => (
          <Card
            key={`P${index}`}
            title={item.title}
            img={item.img}
            p={item.p}
            linkText={item.linkText}
            link={item.link}
            linkGithub={item.linkGithub}
          />
        ))}
        {/* Renderiza la paginación */}
        <Pagination
          totalItems={initialData.length}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}
