import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'

import Layout from "./components/Layout"
import IndexPage from "./pages/IndexPage"

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path={"/"} element={ <IndexPage /> } />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
