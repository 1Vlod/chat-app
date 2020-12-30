import React from "react"
import "./ChatsList"

import { Avatar, Badge, List, Typography } from "antd"
import { NavLink } from "react-router-dom"

import { dialogInterface } from "../../store/stores/DialogsStore"

const { Title, Text, Paragraph } = Typography

interface ChatListItemPropsInterface {
  item: dialogInterface
}

export const ChatsListItem = ({ item }: ChatListItemPropsInterface) => {
  return (
    <NavLink to={`/chats/${item.id}`}>
      <List.Item className="chats-list__item">
        <List.Item.Meta
          avatar={
            <Badge color="green" style={{ width: 10, height: 10 }}>
              <Avatar shape="square" size={30} src={item.avatar} />
            </Badge>
          }
          title={
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Title level={5}>{item.name}</Title>{" "}
              <Text type="secondary">13:21</Text>
            </div>
          }
          description={
            <div>
              <Badge
                count={item.unreadMessages}
                offset={[-15, 20]}
                style={{ background: "#e6f1f5", color: "black" }}
              >
                <Paragraph
                  style={{ width: "80%", lineHeight: "20px" }}
                  ellipsis={{ rows: 2 }}
                >
                  {item.lastMessage}
                </Paragraph>
              </Badge>
            </div>
          }
        />
      </List.Item>
    </NavLink>
  )
}
