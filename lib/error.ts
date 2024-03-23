import { refresh } from "@/actions/refresh";
import { AxiosError } from "axios";
import { redirect } from "next/navigation";

export const onError = (error: any) => {
  if (error instanceof AxiosError) {
    switch (error.response?.status) {
      case 400:
        return error.response?.data.message;
      case 401:
        redirect("/auth/login");
      case 403:
        refresh();
        return "Retry again";
      case 404:
        return error.response?.data.message;
      case 500:
        return error.response?.data.message;
      default:
        return "Something went wrong!";
    }
  } else {
    return "Something went wrong!";
  }
};
