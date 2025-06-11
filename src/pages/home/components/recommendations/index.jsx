import { useEffect, useRef } from "react";
import { Thumbnail } from "../thumbnail";
import s from "./style.module.scss";

export function Recommendations({recommendations}){

    const recomandationsListRef = useRef(null)

    useEffect(() => {
        const container = recomandationsListRef.current
        const handleWheel = (e) => {
            e.preventDefault()
            container.scrollLeft += e.deltaY
        }

        if(container){
            container.addEventListener('wheel', handleWheel, { passive: false })

            return () => {
                container.removeEventListener('wheel', handleWheel);
            }
        }
    }, [])


    return(
        <div className={s.recommendations_container}>
            <div className={s.title}>
                <span>You may also like :</span>
                <input type="text" />
            </div>
            <div ref={recomandationsListRef} className={s.recommendations_list}>
                {recommendations.map((show, index) => (
                    <Thumbnail key={index} show={show}/>
                ))}
            </div>
        </div>
    )
}