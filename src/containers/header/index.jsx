import s from "./style.module.scss";
import logo from "../../core/assets/logo.png"
import { ROUTES } from "../../core/routes.js";
import { SearchInput } from "./components/searchInput";
import { useNavigate } from "react-router";
import { useRef } from "react";

export function Header(){

    const navigate = useNavigate()
    const formRef = useRef(null)

    const returnHome = () => {
        formRef.current.reset()
        navigate(ROUTES.HOME)
    }

    return(
        <header id={s.container}>
            <div className={s.logo}>
                <span onClick={returnHome} className={s.title}>
                    <img src={logo} alt="Logo of the application" />
                    Watowatch
                </span>
                <span className={s.detail}>Find a show you may like</span>
            </div>

            <div className={s.nav}>
                <SearchInput formRef={formRef}/>
            </div>
        </header>
    )
}