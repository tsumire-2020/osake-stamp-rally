export const getApiUrl = (path: string) => {
  console.log(process.env.NEXT_PUBLIC_API_URL)
  return `${process.env.NEXT_PUBLIC_API_URL}${path}`;
}
//禁止文字の制御とかできるよ