import { Rating } from "../../../../components/rating";
import s from "./style.module.scss";
import info from "../../../../core/assets/info.png"
import { useLocation, useNavigate } from "react-router";
import { ROUTES } from "../../../../core/Routes";

export function ShowPresentation({show}){

    const navigate = useNavigate()
    const location = useLocation()

    return(
        <div className={s.show_presentation_container}>
                            
            <div className={s.title}>
                <h1>{show.name}</h1>
                <div className={s.rating}>
                    <Rating rate={show.vote_average}/>
                </div>
            </div>

            <div className={s.description}>
                {show.overview}
            </div>

            {!location.pathname.startsWith("/detail") && (
                <div onClick={() => navigate(ROUTES.DETAIL.replace(":id", show.id))} className={s.more_info}>
                    more info <img src={info} alt="" />
                </div>
            )}
        </div>
    )
}