import { getApiUrl } from "../urls";

export const fetchAlcoholList = async () => {
  const responce = await fetch(getApiUrl("/alcohols"));
  const json = await responce.json();
  return json
}