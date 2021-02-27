import React, { useContext } from "react"
import "./ChatsList.css"

import { Typography, Input, List } from "antd"
import { SearchOutlined } from "@ant-design/icons"

import { observer } from "mobx-react-lite"

import { RootStore } from "../../store/RootStore"

import { ChatsListItem } from "./ChatsListItem"
import { StoreContext } from "../.."

const { Title } = Typography

export const ChatsList: React.FC = observer(
  (): React.ReactElement => {
    const { dialogsStore, userStore } = useContext<RootStore>(StoreContext)
    const { dialogsList } = dialogsStore

    return (
      <div className="chats-list__wrapper">
        <Title level={3} style={{ textAlign: "center" }}>
          Диалоги
        </Title>

        <Input
          placeholder="input search text"
          allowClear
          prefix={<SearchOutlined style={{ fontSize: 20, opacity: 0.15 }} />}
          bordered={false}
          className="chats-list__input"
        />

        <List
          style={{ marginTop: 10, overflowY: "auto", height: "81%", paddingTop: 5 }}
          dataSource={dialogsList}
          renderItem={(item) => <ChatsListItem item={item} ownId={userStore.userData._id}/>}
        />
      </div>
    )
  }
)
