import { ENDPOINTS } from "../../../../core/enpoints";
import s from "./style.module.scss";

export function Thumbnail({show}){

    const backgroundImage = ENDPOINTS.IMAGE.SMALL(show?.backdrop_path)
    const truncateName = show?.name.length > 20 ? `${show?.name.slice(0, 20)}...` : show?.name

    return(
        <div style={{backgroundImage:`url(${backgroundImage})`}} className={s.container}>
            <div className={s.name}>
                {truncateName}
            </div>
        </div>
    )
}