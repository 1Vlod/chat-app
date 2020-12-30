import React, { useContext, useEffect } from "react"
import { Route } from "react-router-dom"

import { observer } from "mobx-react-lite"
import { ChatsList } from "./ChatsList/ChatsList"
import { ChatWindow } from "./ChatWindow/ChatWindow"
import { StoreContext } from "../App"
import { RootStore } from "../store/RootStore"
import { flowResult } from "mobx"
import { Loader } from "./Loader"

export const Chat: React.FC = observer(
  (): React.ReactElement => {
    const { dialogsStore } = useContext<RootStore>(StoreContext)
    const { status } = dialogsStore

    useEffect(() => {
      const fetchDialogs = async () => {
        await flowResult(dialogsStore.fetchDialogs())
      }
      fetchDialogs()
    }, [])

    return (
      <div style={{ display: "flex", height: "100%" }}>
        {status === "NEVER" || status === "LOADING" ? (
          <Loader />
        ) : (
          <>
            <ChatsList />
            <Route path="/chats" exact>
              <div>Выберите Диалог</div>
            </Route>
            <Route path="/chats/:id" component={ChatWindow} />
          </>
        )}
      </div>
    )
  }
)
