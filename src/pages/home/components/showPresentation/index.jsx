import s from "./style.module.scss";

export function ShowPresentation({show}){


    return(
        <div className={s.show_presentation_container}>
                            
            <div className={s.title}>
                <h1>{show.name}</h1>
                <div className={s.rating}>
                    rating
                </div>
            </div>

            <div className={s.description}>
                {show.overview}
            </div>
        </div>
    )
}