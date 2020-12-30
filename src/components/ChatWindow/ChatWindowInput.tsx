import React from "react"
import "./ChatWindow"

import { Input, Button } from "antd"


export const ChatWindowInput = () => {
  return (
    <div className="chat-window__input">
      <Input bordered={false} placeholder="Write a message..." />
      <Button type="primary">Enter</Button>
    </div>
  )
}
