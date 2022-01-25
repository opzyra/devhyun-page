import projects from "@/assets/project";

export const fetchProjects = async () => {
  const data = projects.filter((project) => project.exhibition);
  return data;
};

export const fetchRecentProjects = async () => {
  const data = projects.filter((project) => project.exhibition).slice(0, 6);
  return data;
};

export const fetchProject = async ({ namekey }) => {
  const data = projects.find((project) => project.namekey === namekey);
  return data;
};
