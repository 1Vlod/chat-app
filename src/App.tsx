import React, { createContext, useContext, useEffect } from "react"
import "./App.css"

import "antd/dist/antd.css"
import { Layout } from "antd"

import { Home } from "./pages/Home/Home"
import { Sign } from "./pages/Sign/Sign"

import { Route, Switch, useHistory } from "react-router-dom"
import { observer } from "mobx-react-lite"
import { RootStore } from "./store/RootStore"
import { StoreContext } from "."

const styleWrapper = {
  backgroundImage: "linear-gradient(90deg, #ea82fc, #82d5ff)",
}

const App: React.FC = observer(() => {
  const { userStore } = useContext<RootStore>(StoreContext)
  const history = useHistory()

  useEffect(() => {
    userStore.fetchUser()
  }, [])

  useEffect(() => {
    if (["NEVER", "ERROR"].includes(userStore.userDataStatus)) {
      history.push("/sign")
    }
    if (userStore.userDataStatus === "LOADED") {
      history.push("/")
    }
  }, [userStore.userDataStatus])

  return (
    <Layout>
      <Layout style={styleWrapper} className="wrapper">
        <Layout className="app">
          {userStore.userDataStatus === "LOADING" ? (
            <div>Loading...</div>
          ) : (
            <Switch>
              <Route path="/sign" component={Sign} />
              <Route path="/" component={Home} />
            </Switch>
          )}
        </Layout>
      </Layout>
    </Layout>
  )
})

export default App
