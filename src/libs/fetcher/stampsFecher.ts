
export interface Stamp {
  title: string;
}

export const fetchStamps: () => Promise<Stamp[]> = async () => {
  const res = await fetch("http://127.0.0.1:8000/stamps/");
  const data = await res.json();
  return data;
}