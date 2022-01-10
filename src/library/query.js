import { QueryClient } from "react-query";

export const options = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      keepPreviousData: true,
      staleTime: 60 * 1000,
      retry: 0,
      onError: (error) => {
        if (!error.response) {
          return;
        }
      },
    },
    mutations: {
      onError: (error) => {
        if (!error.response) {
          return;
        }
      },
    },
  },
};

const client = new QueryClient(options);

export default client;
