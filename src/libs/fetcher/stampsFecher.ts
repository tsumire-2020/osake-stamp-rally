import { StampRally } from "@/types";
import { getApiUrl } from "../urls";

export interface Stamp {
  title: string;
}

export const fetchStampRallyById = async (id: string) => {
  const responce = await fetch(getApiUrl(`/stamprallies/${id}`));
  return await responce.json();
}

export const fetchStamps: () => Promise<Stamp[]> = async () => {
  const res = await fetch(getApiUrl("/stamps"));
  const data = await res.json();
  return data;
}

export const fetcherStamprallies: () =>Promise<StampRally[]> = async () => {
  const responce = await fetch(getApiUrl("/stamprallies"));
  const json = await responce.json();
  return json
}

export const fetchCreateStampRally = async (StampRally: any) => {
  const responce = await fetch(getApiUrl("/stamprallies"),{
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      StampRally
    })
  }
  )
  return await responce.json();
}