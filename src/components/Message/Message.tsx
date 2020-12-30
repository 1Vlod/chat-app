import React, { useContext } from "react"
import "./Message.css"
import parse from 'date-fns/parse'
import format from 'date-fns/format'

import { Typography, Card, Avatar, Button } from "antd"
import { MoreOutlined } from "@ant-design/icons"
import { StoreContext } from "../../App"
import { RootStore } from "../../store/RootStore"

const { Meta } = Card
const { Paragraph, Text } = Typography

interface MessagePropsInterface {
  own: boolean
  text: string
  time: string
}

// TODO
// 1. Перенести операции со временем в отдельный файл

export const Message: React.FC<MessagePropsInterface> = ({
  own,
  text,
  time,
}: MessagePropsInterface): React.ReactElement => {
  const { dialogsStore, userStore } = useContext<RootStore>(StoreContext)

  const result = parse(
    time,
    'yyyy/MM/dd/H/m',
    new Date()
  )
  return (
    <Card bordered={false} className="message">
      <Meta
        className={`message__meta-${own ? "right" : "left"}`}
        avatar={
          <Avatar
            shape="circle"
            size={30}
            src={
              own
                ? userStore.userData.avatar
                : dialogsStore.currentDialog?.avatar
            }
          />
        }
        description={
          <>
            <Paragraph
              className={`message__text-${own ? "right" : "left"}`}
              ellipsis={{ rows: 2, expandable: true }}
            >
              {text}
            </Paragraph>
            <Text
              type="secondary"
              style={{ marginLeft: `${own ? "87%" : ""}` }}
            >
              {format(result, "HH:mm")}
            </Text>
            <Button
              type="text"
              shape="circle"
              className={`message__button-${own ? "right" : "left"}`}
            >
              <MoreOutlined style={{ transform: "rotateZ(90deg)" }} />
            </Button>
          </>
        }
      />
    </Card>
  )
}
