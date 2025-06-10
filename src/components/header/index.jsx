import { Link } from "react-router";
import { ROUTES } from "../../core/Routes";

export function Header(){

    return(
        <header>
            <Link to={ROUTES.APP.HOME}>Home</Link>
            <Link to={ROUTES.APP.DETAILS}>Details</Link>
            <Link to={ROUTES.AUTH.SIGNIN}>Sign in</Link>
            <Link to={ROUTES.AUTH.SIGNUP}>Sign up</Link>
        </header>
    )
}