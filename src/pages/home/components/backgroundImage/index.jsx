import s from "./style.module.scss";

export function BackgroundImage({backgroundImage}){


    return(
        <div className={s.background}>
            <img src={backgroundImage} alt="background of the current show" />
        </div>
    )
}