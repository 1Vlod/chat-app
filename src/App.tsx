import React from "react"

import { Layout } from "antd"
import "antd/dist/antd.css"
import "./App.css"

import { Home } from "./pages/Home/Home"

function App() {
  return (
    <Layout>
      <Layout className="wrapper">
        <Home />
      </Layout>
    </Layout>
  )
}

export default App
