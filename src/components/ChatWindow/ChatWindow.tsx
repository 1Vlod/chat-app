import React from 'react'

import { Input, Button } from 'antd'

import { Message } from '../Message/Message'
import { useParams } from 'react-router-dom'

export const ChatWindow = () => {
  const { id } = useParams<{id: string}>()

  return (
    <div>
        {id}
        <div style={{height: "80%", overflowY: "auto" }}>
          <Message left={false} />
          <Message left={true} />
          <Message left={false} />
          <Message left={true} />
        </div>
        <div
          style={{
            background: "white",
            width: "90%",
            borderRadius: 10,
            padding: "20px 25px",
            margin: "0 auto",
            display: "flex",
            boxShadow:" 0 0 10px rgba(0,0,0,0.2)"
          }}
        >
          <Input
            bordered={false}
            placeholder="Write a message..."
          />
          <Button type="primary">Enter</Button>
        </div>
      </div>
  )
}
