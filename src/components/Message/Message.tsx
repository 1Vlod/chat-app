import React from "react"
import "./Message.css"

import { Typography, Card, Avatar, Button } from "antd"
import { MoreOutlined } from "@ant-design/icons"

const { Meta } = Card
const { Paragraph, Text } = Typography

interface MessagePropsInterface {
  left: boolean
}

export const Message: React.FC<MessagePropsInterface> = ({left}: MessagePropsInterface): React.ReactElement => {
  return (
    <Card bordered={false} className="message">
      <Meta
        className={`message__meta-${left ? "left" : "right"}`}
        avatar={
          <Avatar
            shape="circle"
            size={30}
            src="https://images.unsplash.com/photo-1609017879802-fd6e6fb563bd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          />
        }
        description={
          <>
            <Paragraph
              className={`message__text-${left ? "left" : "right"}`}
              ellipsis={{ rows: 2, expandable: true }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
              veritatis veniam! Libero laboriosam maiores illo! g elit. Ut,
              veritatis veniam! Libero laboriosam maiores illo! Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Ut, veritatis veniam!
              Libero laboriosam maiores illo! g elit. Ut, veritatis veniam!
              Libero laboriosam maiores illo! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Ut, veritatis veniam! Libero
              laboriosam maiores illo! g elit. Ut, veritatis veniam! Libero
              laboriosam maiores illo!
            </Paragraph>
            <Text type="secondary" style={{marginLeft: `${left ? "" : "87%"}`}}>12:18</Text>
            <Button type="text" shape="circle" className={`message__button-${left ? "left" : "right"}`}>
              <MoreOutlined style={{transform: "rotateZ(90deg)"}}/>
            </Button>
          </>
        }
      />
    </Card>
  )
}
