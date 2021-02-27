import { Form, Input, Button, Collapse } from "antd"
import Layout from "antd/lib/layout/layout"
import { observer } from "mobx-react-lite"
import React, { useContext } from "react"
import { StoreContext } from "../.."
import { RootStore } from "../../store/RootStore"
import { SignIn } from "./Forms/SignIn"
import { SignUp } from "./Forms/SignUp"

const { Panel } = Collapse

// TODO:
// 1. Поменять фон
// 2. Перенести на react hook form

export const Sign: React.FC = observer(() => {
  return (
    <Layout style={{ alignItems: "center" }}>
      <Collapse accordion style={{ width: "30%" }} ghost>
        <Panel
          header="Sign In"
          key="1"
          style={{
            backgroundImage: "linear-gradient(45deg, #ea82fc, #82d5ff)",
            borderRadius: 10,
          }}
        >
          <SignIn />
        </Panel>
        <Panel
          header="Sign Up"
          key="2"
          style={{
            marginTop: 20,
            backgroundImage: "linear-gradient(-45deg, #ea82fc, #82d5ff)",
            borderRadius: 10,
          }}
        >
          <SignUp />
        </Panel>
      </Collapse>
    </Layout>
  )
})
