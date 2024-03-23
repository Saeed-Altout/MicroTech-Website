import axios from "axios";

import { onError } from "@/lib/error";

export const getProjectsHome = async () => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/${process.env.NEXT_PUBLIC_HOME_PROJECTS}`
    );
    return res.data.data;
  } catch (error) {
    onError(error);
    return [];
  }
};
export const getProjects = async () => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/${process.env.NEXT_PUBLIC_PROJECTS}`
    );
    return res.data.data;
  } catch (error) {
    onError(error);
    return [];
  }
};
export const getProjectById = async (id: string) => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/${process.env.NEXT_PUBLIC_PROJECTS}?id=${id}`
    );
    return res.data.data;
  } catch (error) {
    onError(error);
    return null;
  }
};
