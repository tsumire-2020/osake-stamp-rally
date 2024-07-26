// rafc Creates a React Arrow Function Component 
import { CreateStamprally } from '@/components/CreateStampRally'
import React from 'react'

export const revalidate = 0; //キャッシュをオプトアウトするための値

const DashBoardPage = async () => {
  const responce = await fetch("http://127.0.0.1:8000/stamprally")
  const json = await responce.json()
  console.log(json);// これはサーバーなのでターミナルの方で出るけどF12
  return (
    <div>
            <CreateStamprally />
    </div>
  )
};
export default DashBoardPage;