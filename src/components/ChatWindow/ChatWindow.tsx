import React, { useContext, useEffect } from "react"
import "./ChatWindow.css"

import { useParams } from "react-router-dom"
import { observer } from "mobx-react-lite"

import { RootStore } from "../../store/RootStore"

import { Loader } from "../Loader"
import { ChatWindowInput } from "./ChatWindowInput"
import { Message } from "../Message/Message"
import { StoreContext } from "../.."

// TODO: Разобраться со стилями для сообщения, т.к. при малом количестве текста, сообщение начинает колбасить 

export const ChatWindow: React.FC = observer(
  (): React.ReactElement => {
    const { id } = useParams<{ id: string }>()

    const { messagesStore, dialogsStore, userStore } = useContext<RootStore>(StoreContext)
    const { status, messagesList } = messagesStore

    const getMessageAvatar = (id: string) => {
      if (id === dialogsStore.userId) {
        return userStore.getAvatar
      }
      return dialogsStore.dialogAvatar
    }

    useEffect(() => {
      dialogsStore.setCurrentDialog(id)
      if (dialogsStore.currentDialog) {
        messagesStore.fetchMessages(id)
      }
    }, [id])

    return (
      <div className="chat-window">
        <div className="chat-window__messages">
          {status === "NEVER" || status === "LOADING" ? (
            <Loader />
          ) : (
            messagesList.map((item) => (
              <Message
                key={item._id}
                own={item.author === userStore.userData._id}
                text={item.text}
                time={item.updatedAt}
                avatar={getMessageAvatar(item.author)}
              />
            ))
          )}
        </div>
        <ChatWindowInput/>
      </div>
    )
  }
)
