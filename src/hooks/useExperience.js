import initialData from "../mocks/experience.json";

export function useExperience() {
  const mappedExperience = initialData?.map((item) => ({
    title: item.title,
    img: item.img,
    p: item.p,
    link: item.link,
    linkText: item.linkText,
    linkGithub: item.linkGithub,
  }));

  return { experience: mappedExperience };
}
