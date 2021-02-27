import React, { useContext, useState } from "react"
import "./ChatWindow"

import { Input, Button } from "antd"
import { RootStore } from "../../store/RootStore"
import { StoreContext } from "../.."

const { TextArea } = Input

export const ChatWindowInput = () => {
  const { messagesStore } = useContext<RootStore>(StoreContext)
  const [message, setMessage] = useState<string>("")

  return (
    <div className="chat-window__input">
      <TextArea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        bordered={false}
        placeholder="Write a message..."
        autoSize={{ maxRows: 3 }}
      />
      <Button 
        style={{ marginLeft: 10 }} 
        type="primary"
        onClick={() => messagesStore.addMessage(message)}>
        Enter
      </Button>
    </div>
  )
}
