import React from "react"
import { Layout } from "antd"
import { Chat } from "./Chat"

export const Content = () => {
  const { Content } = Layout

  //TODO: перенести сюда свитч для роутера
  return (
    <Content style={{ background: "#f8f8f8", marginTop: 38, borderRadius: 15}}>
      <Chat />
    </Content>
  )
}
