import React from "react"
import "./ChatsList"

import { Avatar, Badge, List, Typography } from "antd"
import { Link, useHistory } from "react-router-dom"

import { dialogInterface } from "../../store/stores/DialogsStore"

const { Title, Text, Paragraph } = Typography

interface ChatListItemPropsInterface {
  item: dialogInterface
  ownId: string | undefined
}

export const ChatsListItem = ({ item, ownId }: ChatListItemPropsInterface) => {
  const dialogInfo = item.members.filter((elem) => elem._id !== ownId)
  
  return (
    <Link to={`/chats/${item._id}`}>
    <List.Item className="chats-list__item">
        <List.Item.Meta
          avatar={
            <Badge color="green" style={{ width: 10, height: 10 }}>
              <Avatar shape="square" size={30} src={dialogInfo[0]?.avatar} />
            </Badge>
          }
          title={
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Title level={5}>{dialogInfo[0].fullname}</Title>{" "}
              <Text type="secondary">13:21</Text>
            </div>
          }
          description={
            <div>
              <Badge
                count={item.newMessagesCount}
                offset={[-15, 20]}
                style={{ background: "#e6f1f5", color: "black" }}
              >
                <Paragraph
                  style={{ minWidth: "80%", lineHeight: "20px" }}
                  ellipsis={{ rows: 2 }}
                >
                  {item.lastMessage}
                </Paragraph>
              </Badge>
            </div>
          }
        />
    </List.Item>
    </Link>
  )
}
