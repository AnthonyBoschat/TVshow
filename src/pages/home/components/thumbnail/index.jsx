import { useState } from "react";
import { ENDPOINTS } from "../../../../core/enpoints";
import s from "./style.module.scss";
import showMore from "../../../../core/assets/show.png"
import { useNavigate } from "react-router";
import { ROUTES } from "../../../../core/routes";

export function Thumbnail({show}){

    const [hover, setHover] = useState(false)
    const navigate = useNavigate()
    const backgroundImage = ENDPOINTS.IMAGE.SMALL(show?.backdrop_path ? show?.backdrop_path : show?.poster_path)
    const truncateName = show?.name.length > 20 ? `${show?.name.slice(0, 20)}...` : show?.name

    return(
        <div onMouseLeave={() => setHover(false)} onMouseEnter={() => setHover(true)} style={{backgroundImage:`url(${backgroundImage})`}} className={s.container}>
            
            <div className={s.link}>
                <div onClick={() => navigate(ROUTES.SHOW.replace(":id", show.id))} className={`${s.show_more_container} ${hover ? s.active : null}`}>
                    <img src={showMore} alt="" />
                </div>
            </div>

            <div className={s.name}>
                {truncateName}
            </div>
        </div>
    )
}