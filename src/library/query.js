import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";

const client = new QueryClient({
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
});

export const preFetchingQuery = async (queries) => {
  const queryClient = new QueryClient();

  for (let i = 0; i < queries.length; i++) {
    const query = queries[i];
    await query(queryClient);
  }

  return dehydrate(queryClient);
};

export default client;
