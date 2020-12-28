import React from "react"
import { Route } from "react-router-dom"

import { ChatsList } from "./ChatsList"
import { ChatWindow } from "./ChatWindow/ChatWindow"

export const Chat: React.FC = (): React.ReactElement => {
  return (
    <div style={{ display: "flex", height: "100%" }}>
      <ChatsList />
      <Route path="/chats" exact>
        <div>
          Выберите Диалог 
        </div>
      </Route>
      <Route path="/chats/:id" component={ChatWindow}/>
    </div>
  )
}
