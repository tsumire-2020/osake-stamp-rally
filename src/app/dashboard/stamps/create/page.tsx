import React from 'react'
import { createStampRallyAction } from './actions';
import { Button, Input, Textarea } from '@yamada-ui/react';

export const CreatePage = () => {
  return (
    <form action={createStampRallyAction}>
    <div>
      <div>Createpage</div>
      <div>
        <div>Title</div>
        <Input name="title"/>
      </div>
      <div>
        <div>説明</div>
        <Textarea name="description"/>
      </div>
      <div>
        <div>お酒一覧</div>
      </div>
      <div>
        <div>asd</div>
      </div>
    </div>
    <Button type='submit'>作成</Button>
    </form>
  )
}
export default CreatePage;