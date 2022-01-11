import { useQuery } from "react-query";

import * as request from "./request";

// Query Keys
export const PORTFOLIOS = "PORTFOLIOS";
export const RECENT_PORTFOLIOS = "RECENT_PORTFOLIOS";
export const PORTFOLIO = "PORTFOLIO";
export const PORTFOLIO_NAMEKEY = (namekey) => [PORTFOLIO, namekey];

// PreFeatching
export const preFetchPortfolios = () => async (client) => {
  await client.fetchQuery(PORTFOLIOS, request.fetchPortfolios);
};

export const preFetchRecentPortfolios = () => async (client) => {
  await client.fetchQuery(RECENT_PORTFOLIOS, request.fetchRecentPortfolios);
};

export const preFetchPortfolio =
  ({ namekey }) =>
  async (client) => {
    await client.fetchQuery(
      PORTFOLIO_NAMEKEY(namekey),
      async () => await request.fetchPortfolio({ namekey }),
    );
  };

// Query Hook
export function usePortfolios() {
  const { data, ...props } = useQuery(
    PORTFOLIOS,
    async () => await request.fetchPortfolios(),
  );

  return { portfolios: data, ...props };
}

export function useRecentPortfolios() {
  const { data, ...props } = useQuery(
    RECENT_PORTFOLIOS,
    request.fetchRecentPortfolios,
  );

  return { recentPortfolios: data, ...props };
}

export function usePortfolio({ namekey }) {
  const { data, ...props } = useQuery(
    PORTFOLIO_NAMEKEY(namekey),
    async () => await request.fetchPortfolio({ namekey }),
  );

  return { portfolio: data, ...props };
}
