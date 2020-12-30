import React, { createContext } from "react"
import "./App.css"

import "antd/dist/antd.css"
import { Layout } from "antd"

import { Home } from "./pages/Home/Home"
import { RootStore } from "./store/RootStore"

export const StoreContext = createContext<RootStore>({} as RootStore)

function App() {
  return (
    <StoreContext.Provider value={new RootStore()}>
      <Layout>
        <Layout className="wrapper">
          <Home />
        </Layout>
      </Layout>
    </StoreContext.Provider>
  )
}

export default App
