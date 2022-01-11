import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      keepPreviousData: true,
      staleTime: 60 * 1000,
      retry: 0,
    },
  },
});

export const preFetchingQuery = async (queries) => {
  const queryClient = new QueryClient();
  for (let i = 0; i < queries.length; i++) {
    const query = queries[i];
    try {
      await query(queryClient);
    } catch (error) {
      return {
        props: {
          statusCode: error.status,
        },
      };
    }
  }

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default client;
