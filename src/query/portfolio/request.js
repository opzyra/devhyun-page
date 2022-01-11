import axios from "@/library/axios";

export const fetchPortfolios = async () => {
  const response = await axios.get("/portfolio");
  const data = response && response.data;
  return data;
};

export const fetchRecentPortfolios = async () => {
  const response = await axios.get("/portfolio?limit=6");
  const data = response && response.data;
  return data;
};

export const fetchPortfolio = async ({ namekey }) => {
  const response = await axios.get(`/portfolio/${namekey}`);
  const data = response && response.data;
  return data;
};
