import React, { useContext } from "react";
import "./ChatsList.css";

import { Typography, List } from "antd";

import { observer } from "mobx-react-lite";

import { RootStore } from "../../store/RootStore";

import { ChatsListItem } from "./ChatsListItem";
import { StoreContext } from "../..";
import { ChatListSearch } from "./ChatListSearch";

const { Title } = Typography;

export const ChatsList: React.FC = observer(
  (): React.ReactElement => {
    const { dialogsStore, userStore, usersStore } = useContext<RootStore>(
      StoreContext
    );
    const { dialogsList } = dialogsStore;

    return (
      <div className="chats-list__wrapper">
        <Title level={3} style={{ textAlign: "center" }}>
          Диалоги
        </Title>

        <ChatListSearch />
        {usersStore.users.length ? (
          <ul>
            {usersStore.users.map((elem) => {
              return <li key={elem._id}>{elem.fullname}</li>;
            })}
          </ul>
        ) : null}
        <List
          style={{
            marginTop: 10,
            overflowY: "auto",
            height: "81%",
            paddingTop: 5,
          }}
          dataSource={dialogsList}
          renderItem={(item) => (
            <ChatsListItem item={item} ownId={userStore.userData._id} />
          )}
        />
      </div>
    );
  }
);
