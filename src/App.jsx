import { Route, Routes } from "react-router"
import { BrowserRouter } from "react-router"
import { Home } from "./pages/home"
import { NotFound } from "./pages/404"
import { Details } from "./pages/details"
import { AuthLayout } from "./layout/Auth"
import { AppLayout } from "./layout/App"
import { SignIn } from "./pages/auth/SignIn"
import { SignUp } from "./pages/auth/SignUp"
import { ROUTES } from "./core/Routes"



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>


          <Route path={ROUTES.APP.ROOT} element={<AppLayout/>}>
            <Route path={ROUTES.APP.HOME} element={<Home/>} />
            <Route path={ROUTES.APP.DETAILS} element={<Details/>} />
          </Route>

          <Route path={ROUTES.AUTH.ROOT} element={<AuthLayout/>}>
            <Route path={ROUTES.AUTH.SIGNIN} element={<SignIn/>}/>
            <Route path={ROUTES.AUTH.SIGNUP} element={<SignUp/>}/>
          </Route>



          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

