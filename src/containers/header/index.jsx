import s from "./style.module.scss";
import logo from "../../core/assets/logo.png"

export function Header(){


    return(
        <header id={s.container}>
            <div className={s.logo}>
                <span className={s.title}>
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