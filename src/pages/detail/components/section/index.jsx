import s from "./style.module.scss";

export function Section({
    title       = "title",
    elements    = [],
    render      = null,
    className   = null
}){


    return(
        <div className={`${s.container} ${className}`}>
            <h1 className={s.title}>{title}</h1>
            <ul className={s.elements_container}>
                {elements.map(element => render(element))}
            </ul>
        </div>
    )
}