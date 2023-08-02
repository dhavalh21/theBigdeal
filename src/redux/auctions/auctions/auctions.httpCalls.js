import axiosInstance from "@/helpers/axiosInstance";

export const upcomingAuctionHttp = async (data) => {
  try {
    const response = await axiosInstance.get("/auction", data);
    console.log(response, "acurions");
    return response;
  } catch (error) {
    return error;
  }
};
