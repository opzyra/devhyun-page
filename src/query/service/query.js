import { useQuery } from "react-query";

import * as request from "./request";

// Query Keys
export const SERVICES = "SERVICES";

// PreFeatching
export const preFetchServices = () => async (client) => {
  await client.fetchQuery(SERVICES, request.fetchServices);
};

// Query Hook
export function useServices() {
  const { data, ...props } = useQuery(
    SERVICES,
    async () => await request.fetchServices(),
  );

  return { services: data, ...props };
}
