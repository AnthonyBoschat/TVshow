import s from "./style.module.scss";
import logo from "../../core/assets/logo.png"
import { useNavigate } from "react-router";
import { ROUTES } from "../../core/routes";

export function Header(){

    const navigate = useNavigate()


    return(
        <header id={s.container}>
            <div className={s.logo}>
                <span onClick={() => navigate(ROUTES.HOME)} className={s.title}>
                    <img src={logo} alt="Logo of the application" />
                    Watowatch
                </span>
                <span className={s.detail}>Find a show you may like</span>
            </div>

            <div className={s.nav}>
                <input type="text" />
            </div>
        </header>
    )
}