import React, { useContext, useEffect } from "react"
import "./ChatWindow.css"

import { useParams } from "react-router-dom"
import { observer } from "mobx-react-lite"

import { StoreContext } from "../../App"
import { RootStore } from "../../store/RootStore"

import { Loader } from "../Loader"
import { ChatWindowInput } from "./ChatWindowInput"
import { Message } from "../Message/Message"

export const ChatWindow: React.FC = observer(
  (): React.ReactElement => {
    const { id } = useParams<{ id: string }>()

    const { messagesStore, dialogsStore, userStore } = useContext<RootStore>(StoreContext)
    const { status, messagesList } = messagesStore

    useEffect(() => {
      dialogsStore.setCurrentDialog(id)
      if (dialogsStore.currentDialog) {
        messagesStore.fetchMessages(dialogsStore.currentDialog.linkMessages)
      }
    }, [dialogsStore.currentDialog, id])

    return (
      <div className="chat-window">
        <div className="chat-window__messages">
          {status === "NEVER" || status === "LOADING" ? (
            <Loader />
          ) : (
            messagesList.map((item) => (
              <Message
                key={item.id}
                own={item.author === userStore.userData._id}
                text={item.text}
                time={item.timestamp}
              />
            ))
          )}
        </div>
        <ChatWindowInput/>
      </div>
    )
  }
)
