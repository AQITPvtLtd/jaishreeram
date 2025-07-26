import { httpAxios } from "@/helper/httpHelper";

export async function getServiceData() {
    try {
        const result = await httpAxios.get("/api/services").then((response) => response.data);
        return result;
    } catch (error) {
        console.log(error)
    }
}