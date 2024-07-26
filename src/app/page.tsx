import { BearCounter } from "@/components/BareCounter";
import { CreateStamprally } from "@/components/CreateStampRally";
import { Button } from "@yamada-ui/react";
import Image from "next/image";
import Link from "next/link";

const color = 'white'
//Unhandled Runtime Error
//Error: useRef only works in Client Components. Add the "use client" directive at the top of the file to use it. Read more: https://nextjs.org/docs/messages/react-client-hook-in-server-component
export default function Home() {
  return (
  <>
    <main>Hero部分</main>
  </>
  );
}
