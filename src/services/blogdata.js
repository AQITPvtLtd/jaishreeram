import { httpAxios } from "@/helper/httpHelper";

export async function getBlogData() {
  try {
    const result = await httpAxios
      .get("/api/blog")
      .then((response) => response.data);
    return result;
  } catch (err) {
    console.log(err);
  }
}
