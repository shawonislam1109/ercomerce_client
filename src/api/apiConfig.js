// redux toolkit import
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// initialize an empty api service that we'll inject endpoints into later as needed
const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    mode: "cors",

    prepareHeaders(headers, { getState }) {
      const token = getState().auth.token;
      if (!token) return headers;
      headers.set("Authorization", "Bearer " + token);
      return headers;
    },
  }),
  endpoints: () => ({}),
});

export default api;
