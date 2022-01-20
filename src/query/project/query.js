import { useQuery } from "react-query";

import * as request from "./request";

// Query Keys
export const PROJECTS = "PROJECTS";
export const RECENT_PROJECTS = "RECENT_PROJECTS";
export const PROJECT = "PROJECT";
export const PROJECT_NAMEKEY = (namekey) => [PROJECT, namekey];

// PreFeatching
export const preFetchProjects = () => async (client) => {
  await client.fetchQuery(PROJECTS, request.fetchProjects);
};

export const preFetchRecentProjects = () => async (client) => {
  await client.fetchQuery(RECENT_PROJECTS, request.fetchRecentProjects);
};

export const preFetchProject =
  ({ namekey }) =>
  async (client) => {
    await client.fetchQuery(
      PROJECT_NAMEKEY(namekey),
      async () => await request.fetchProject({ namekey }),
    );
  };

// Query Hook
export function useProjects() {
  const { data, ...props } = useQuery(
    PROJECTS,
    async () => await request.fetchProjects(),
  );

  return { projects: data, ...props };
}

export function useRecentProjects() {
  const { data, ...props } = useQuery(
    RECENT_PROJECTS,
    request.fetchRecentProjects,
  );

  return { recentProjects: data, ...props };
}

export function useProject({ namekey }) {
  const { data, ...props } = useQuery(
    PROJECT_NAMEKEY(namekey),
    async () => await request.fetchProject({ namekey }),
  );

  return { project: data, ...props };
}
