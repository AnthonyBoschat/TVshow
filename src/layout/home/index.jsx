import { Outlet } from "react-router";
import s from "./style.module.scss";
import { Header } from "../../containers/header";

export function HomeLayout(){


    return(
        <main id={s.container}>
            <Header/>
            <Outlet/>
        </main>
    )
}