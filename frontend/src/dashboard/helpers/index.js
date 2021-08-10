import { API } from "../../core/backend";

export const getMarketOverview = (token) => {
  return fetch(`${API}/overview`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((data) => {
      return data.json();
    })
    .catch((err) => err);
};
