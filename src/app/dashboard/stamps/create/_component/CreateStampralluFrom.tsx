"use client"
import { Textarea,Input, Button } from '@yamada-ui/react';
// rafc
import React, { FunctionComponent } from 'react'
import { useFormState, useFormStatus } from 'react-dom';
import { createStampRallyAction } from '../actions';
import { Alcohol } from '@/types';

interface Props {
  alcoholList: Alcohol[]
}

export const CreateStampralluFrom : FunctionComponent<Props> = ({
  alcoholList
}) => {
  const [state,action] = useFormState(createStampRallyAction, {});
  const {pending} = useFormStatus();
  return (
    <form action={action}>
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
        <div>
          {alcoholList?.map((alcohol) => (
            <div key={alcohol.id}>{alcohol.name}</div>
          ))}
        </div>
      </div>
      <div>
        <div>asd</div>
      </div>
    </div>
    { pending ? (
      <div>....loarding</div>
    ) : (<div></div>)}
    <Button type='submit'>作成</Button>
    </form>
  )
}
