import projects from "@/assets/project";

export const fetchProjects = () => {
  const data = projects.filter((project) => project.exhibition);
  return data;
};

export const fetchRecentProjects = () => {
  const data = projects.filter((project) => project.exhibition).slice(0, 6);
  return data;
};

export const fetchProject = ({ namekey }) => {
  const data = projects.find((project) => project.namekey === namekey);
  return data;
};
