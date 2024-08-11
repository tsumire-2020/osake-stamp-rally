"use client"

import React from "react"
import { Button } from "@yamada-ui/react"
import Link from "next/link";



export const CreateStampRally = () => {
  return (
    <Link href="/dashboard/stamps/create">
  <Button>
    スタンプラリーの作成
  </Button>
  </Link>
  )
}