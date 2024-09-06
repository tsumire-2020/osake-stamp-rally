import { StampRally } from "@/types";
import { getApiUrl } from "../urls";

export interface Stamp {
  title: string;
}

type fetchStampRallyByIdType = (id: string) => Promise<{
  id: string;
  title: string;
  description: string
  stamps: {
    id:string;
    alcohol: {
      id:string;
      name:string;
    }
  }[]
}>

export const fetchStampRallyById: fetchStampRallyByIdType = async (id: string) => {
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

export const fetchCreateStampRally = async (stampRally: any) => {
  const responce = await fetch(getApiUrl("/stamprallies"),{
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(stampRally)
  }
  )
  return await responce.json();
}