import { Link, useLocation } from "react-router";
import { ROUTES } from "../../core/Routes";
import { useCallback, useMemo } from "react";
import s from "./style.module.scss"

export function Header(){

    const location              = useLocation()
    const isActive              = useCallback((link) => location.pathname === link, [location])
    const activateClassName     = useCallback((link) => isActive(link) ? s.active : null)

    return(
        <header>
            <Link className={activateClassName(ROUTES.APP.HOME)} to={ROUTES.APP.HOME}>Home</Link>
            <Link className={activateClassName(ROUTES.APP.DETAILS)} to={ROUTES.APP.DETAILS}>Details</Link>
            <Link className={activateClassName(ROUTES.AUTH.SIGNIN)} to={ROUTES.AUTH.SIGNIN}>Sign in</Link>
            <Link className={activateClassName(ROUTES.AUTH.SIGNUP)} to={ROUTES.AUTH.SIGNUP}>Sign up</Link>
        </header>
    )
}