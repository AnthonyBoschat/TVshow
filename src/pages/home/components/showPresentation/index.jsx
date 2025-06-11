import { Rating } from "../../../../components/rating";
import s from "./style.module.scss";
import info from "../../../../core/assets/info.png"

export function ShowPresentation({show}){


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

            <div className={s.more_info}>
                more info <img src={info} alt="" />
            </div>
        </div>
    )
}