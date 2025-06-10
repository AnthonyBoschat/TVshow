import { Link, Outlet } from "react-router";

export function AuthLayout(){
  return(
    <>
        <Link to={-1}>Go back</Link>
        <h1>Authentification</h1>
        <Outlet/>
    </>
  )
}