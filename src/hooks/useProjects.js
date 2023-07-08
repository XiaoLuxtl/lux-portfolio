import initialData from "../mocks/projects.json";

export function useProjects() {
  const mappedProjects = initialData?.map((item) => ({
    title: item.title,
    img: item.img,
    p: item.p,
    link: item.link,
    linkText: item.linkText,
    linkGithub: item.linkGithub,
  }));

  return { projects: mappedProjects };
}
