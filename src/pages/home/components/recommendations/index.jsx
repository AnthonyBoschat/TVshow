import { useEffect, useMemo, useRef, useState } from "react";
import { Thumbnail } from "../thumbnail";
import s from "./style.module.scss";
import { Input } from "../../../../components/input";
import { normalizeString } from "../../../../core/services/normalize";

export function Recommendations({recommendations}){

    const recomandationsListRef = useRef(null)
    const [filterValue, setFiltervalue] = useState("")
    const filteredRecommendations = useMemo(() => recommendations.filter(show => normalizeString(show.name).includes(normalizeString(filterValue))) ,[filterValue, recommendations])

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
                <Input
                    className={s.filter_input}
                    placeholder="Filter shows..."
                    value={filterValue}
                    onChange={(event) => {
                        setFiltervalue(event.target.value)
                    }}
                />
            </div>
            <div ref={recomandationsListRef} className={s.recommendations_list}>
                {!filteredRecommendations.length && (
                    <div className={s.no_recommendations}>
                        <span>
                            No recommendations
                        </span>
                    </div>
                )}
                {filteredRecommendations.map((show, index) => (
                    <Thumbnail key={index} show={show}/>
                ))}
            </div>
        </div>
    )
}