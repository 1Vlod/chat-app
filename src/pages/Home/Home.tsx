import React, { useContext, useEffect } from "react"
import "./Home.css"

import { Route, Switch } from "react-router-dom"
import { Empty, Layout } from "antd"
import { observer } from "mobx-react-lite"
import { flowResult } from "mobx"

import { Content } from "../../components/Content"
import { HeaderComponent } from "../../components/Header/Header"
import { Nav } from "../../components/Nav/Nav"
import { StoreContext } from "../../App"
import { RootStore } from "../../store/RootStore"
import { Loader } from "../../components/Loader"

export const Home: React.FC = observer(
  (): React.ReactElement => {
    const { userStore } = useContext<RootStore>(StoreContext)

    useEffect(() => {
      const fetchData = async () => {
        await flowResult(userStore.fetchUser())
      }
      fetchData()
    }, [])

    return (
      <Layout className="home">
        <Nav />
        {userStore.userDataStatus === "LOADING" ? (
          <Loader />
        ) : (
          <Layout className="main-wrapper">
            <HeaderComponent />
            <Switch>
              <Route path="/chats">
                <Content />
              </Route>
              <Route path="/">
                <Empty
                  style={{ marginTop: "5rem" }}
                  description="Страница не существует"
                />
              </Route>
            </Switch>
          </Layout>
        )}
      </Layout>
    )
  }
)
