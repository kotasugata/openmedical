import type { NextApiRequest, NextApiResponse } from "next";
import { axios } from "@/apis/axios";

export type Companies = {
  id?: number;
  name: string;
  website: string;
  address: number;
}[];

export const getcompanies = (
  req: NextApiRequest,
  res: NextApiResponse<Companies>
): Promise<void> | void => {
  const {
    body: { companies },
  } = req;
  return axios
    .get("/companies")
    .then((response) => res.status(200).json(response.data))
    .catch((error) => Promise.reject(error));
};
