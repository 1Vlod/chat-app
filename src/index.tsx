import React, { createContext } from "react"
import ReactDOM from "react-dom"
import "./index.css"

import { BrowserRouter as Router } from "react-router-dom"

import App from "./App"
import { RootStore } from "./store/RootStore"

export const StoreContext = createContext<RootStore>({} as RootStore)
export const store = new RootStore()

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <StoreContext.Provider value={store}>
        <App />
      </StoreContext.Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
)
