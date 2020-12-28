import React from "react"

import { Typography, Input, List, Avatar, Badge, Button, Space } from "antd"
import { SearchOutlined } from "@ant-design/icons"
import { useHistory } from "react-router-dom"

const { Title, Text, Paragraph } = Typography

const data = [
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 2",
  },
  {
    title: "Ant Design Title 3",
  },
  {
    title: "Ant Design Title 4",
  },
  {
    title: "Ant Design Title 4",
  },
  {
    title: "Ant Design Title 4",
  },
]

export const ChatsList: React.FC = (): React.ReactElement => {
  const history = useHistory()

  const changeHistory = (): void => {
    history.push("/chats/33213")
  }

  return (
    <div style={{ padding: "29px 20px", minWidth: "40%", borderRight: "2px solid #e6f1f5", position: "relative" }}>
      <Title level={3} style={{ textAlign: "center" }}>
        Диалоги
      </Title>
      <Input
        placeholder="input search text"
        allowClear
        prefix={<SearchOutlined style={{ fontSize: 20, opacity: 0.15 }} />}
        bordered={false}
        style={{
          fontSize: 20,
          height: 40,
          borderRadius: 10,
          background: "white",
        }}
      />
      <List
        style={{ marginTop: 20, overflowY: "auto", height: "81%" }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item style={{ marginTop: 10, border: "none", padding: 0 }} onClick={changeHistory}>
            <List.Item.Meta
              avatar={
                <Badge color="green" style={{ width: 10, height: 10 }}>
                  <Avatar
                    shape="square"
                    size={30}
                    src="https://images.unsplash.com/photo-1609017879802-fd6e6fb563bd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                  />
                </Badge>
              }
              title={
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Title level={5}>{item.title}</Title>{" "}
                  <Text type="secondary">13:21</Text>
                </div>
              }
              description={
                <div>
                  <Badge
                    count={8}
                    offset={[-15, 20]}
                    style={{ background: "#e6f1f5", color: "black" }}
                  >
                    <Paragraph
                      style={{ width: "80%", lineHeight: "20px" }}
                      ellipsis={{ rows: 2 }}
                    >
                      Ant Design, a design language for dpodm applications, is
                      refined by Ant UED Team cojc dojdkc cljdcomd cod
                    </Paragraph>
                  </Badge>
                </div>
              }
            />
          </List.Item>
        )}
      />
    </div>
  )
}
