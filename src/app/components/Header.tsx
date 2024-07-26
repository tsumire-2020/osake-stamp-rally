import Link from 'next/link'
import React from 'react'

export const Header = () => {
  return (
    <header className="border-b py-6">
    <div className="flex flex-row justify-between items-center container mx-auto">
      <div>お酒スタンプラリー</div>

      <div>
        <Link href="/dashboard">ダッシュボード画面</Link>
      </div>
    </div>

  </header>
  )
}
