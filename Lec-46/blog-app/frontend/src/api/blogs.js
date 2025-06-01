import API from "../common/api"
import { getToken } from "./auth";

export const createBlog = async (data) => {
  const res = await API.post("/blogs", data, {
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  });
  return res.data;
}

export const getBlogs = async () => {
   const res = await API.get("/blogs", {
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  });
  return res.data;
}