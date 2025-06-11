import { BrowserRouter, Route, Routes } from "react-router"
import "./App.scss"
import { ROUTES } from "./core/Routes"
import { HomePage } from "./pages/home"
import { HomeLayout } from "./layout/home"
import { ToastContainer } from "react-toastify"



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.HOME} element={<HomeLayout/>}>
            <Route path={ROUTES.HOME} element={<HomePage/>} />
            <Route path={ROUTES.SHOW} element={<HomePage/>} />
          </Route>
        </Routes>
      </BrowserRouter>

      <ToastContainer position="top-center" />
    </>
  )
}

export default App

