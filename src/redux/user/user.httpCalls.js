import axiosInstance from "@/helpers/axiosInstance";

export const userLoginHttp = async (data) => {
  try {
    const response = await axiosInstance.post("user/login", data);
    return response;
  } catch (error) {
    return error;
  }
};

export const userVerifyHttp = async (data) => {
  try {
    const response = await axiosInstance.patch("user/verify", data);
    return response;
  } catch (error) {
    return error;
  }
};

export const userRegisterHttp = async (data) => {
  try {
    const response = await axiosInstance.post("user/register", data);
    return response;
  } catch (error) {
    return error; 
  }
};
