import React, { useContext } from "react";

import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "./ChatsList.css";
import { observer } from "mobx-react-lite";
import { RootStore } from "../../store/RootStore";
import { StoreContext } from "../..";
import { statusLoadingType } from "../../store/types";
//ToDo: Add styles to search
const { Search } = Input;
export const ChatListSearch = observer(() => {
  const { usersStore } = useContext<RootStore>(
    StoreContext
  );

  const handleSearch = (value: string) => {
    if (!value) {
      return
    }
    console.log(value)
    usersStore.fetchUsers({fullname: value})
  }

  return (
    <Search
      placeholder="input search text"
      // loading
      enterButton
      allowClear
      loading={usersStore.status === statusLoadingType.LOADING}
      // className="chats-list__input"
      onSearch={handleSearch}
    />
    // <Input
    //   placeholder="input search text"
    //   allowClear
    //   prefix={<SearchOutlined style={{ fontSize: 20, opacity: 0.15 }} />}
    //   bordered={false}
    //   className="chats-list__input"
    //   addonAfter={<But}
    // />
  );
});
