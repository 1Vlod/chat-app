import React from "react"
import "./Home.css"

import { Layout } from "antd"
import { Content } from "../../components/Content"
import { HeaderComponent } from "../../components/Header/Header"
import { Nav } from "../../components/Nav/Nav"
import { Route, Switch } from "react-router-dom"

export const Home = () => {
  return (
    <Layout className="home">
      <Nav />
      <Layout className="main-wrapper">
        <HeaderComponent />
        <Switch>
          <Route path="/chats">
            <Content />
          </Route>
          <Route path="/">
            <div>Такой страницы еще не существует</div>
          </Route>
        </Switch>
      </Layout>
    </Layout>
  )
}
