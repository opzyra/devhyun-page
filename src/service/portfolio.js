import axios from "@/library/axios";

export const selectAllRecent = async () => {
  const response = await axios.get("/portfolio?limit=6");
  const data = response && response.data;
  return data;
};
