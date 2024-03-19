import axios from "axios";

import { onError } from "@/lib/error";

export const getProjectsHome = async () => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_HOME_PROJECTS}`);
    return res.data.data;
  } catch (error) {
    onError(error);
    return [];
  }
};
