import Link from 'next/link'
import React from 'react'

export const Header = () => {
  return (
    <header className="border-b py-6">
    <div className="flex flex-row justify-between items-center container mx-auto">
      <Link href="/" className='font-bold text-zinc-700' >
        お酒スタンプラリー
      </Link>

      <div className='flex flex-row items-center gap-3' >
        <Link href="/login">ログイン画面</Link>
        <Link href="/register">登録</Link>
        <Link href="/dashboard">ダッシュボード画面</Link>
      </div>
    </div>

  </header>
  )
}
