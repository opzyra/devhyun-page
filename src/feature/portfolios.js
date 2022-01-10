import { useQuery } from "react-query";
import axios from "@/library/axios";

// Query Keys
export const RECENT_PORTFOLIOS = "RECENT_PORTFOLIOS";

// Request Server
export const fetchRecentPortfolios = async () => {
  const response = await axios.get("/portfolios/recent");
  const data = response && response.data;
  return data;
};

// PreFeatching
export const preFetchRecentPortfolios = () => async (client) => {
  await client.prefetchQuery([RECENT_PORTFOLIOS], fetchRecentPortfolios);
};

// Query Hook
export function useRecentPortfolios() {
  const { data, ...props } = useQuery(
    [RECENT_PORTFOLIOS],
    fetchRecentPortfolios,
  );

  return { recentPortfolios: data, ...props };
}
