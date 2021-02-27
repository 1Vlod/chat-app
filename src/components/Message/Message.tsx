import React, { useContext } from "react"
import "./Message.css"
import parse from "date-fns/parse"
import format from "date-fns/format"

import { Typography, Card, Avatar, Button } from "antd"
import { MoreOutlined } from "@ant-design/icons"

const { Meta } = Card
const { Paragraph, Text } = Typography

interface MessagePropsInterface {
  own: boolean
  text: string
  time: string
  avatar?: string
}

// TODO
// 1. Перенести операции со временем в отдельный файл

export const Message: React.FC<MessagePropsInterface> = ({
  own,
  text,
  time,
  avatar,
}) => {
  // const result = parse(
  //   time,
  //   'yyyy/MM/dd/H/m',
  //   new Date()
  // )
  return (
    <div className="message__wrapper">
      <Paragraph
          className={`message__text-${own ? "right" : "left"}`}
          // ellipsis={{ rows: 4, expandable: true }}
        >
          {text}
        </Paragraph>
        {/* <Text type="secondary" style={{ marginLeft: `${!own ? "87%" : ""}` }}> */}
          {/* {1836972} */}
          {/* {format(new Date(time), "HH:mm")} */}
        {/* </Text> */}
        {/* <Button
          type="text"
          shape="circle"
          className={`message__button-${own ? "right" : "left"}`}
        >
          <MoreOutlined style={{ transform: "rotateZ(90deg)" }} />
        </Button> */}
    </div>
  )
}
