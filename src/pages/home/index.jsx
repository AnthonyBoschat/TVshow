import { useEffect, useMemo, useState } from "react";
import s from "./style.module.scss";
import { callAPI } from "../../core/fetch";
import { ENDPOINTS } from "../../core/enpoints";

export function HomePage(){

    const [show, setShow] = useState(null)
    const [recommendations, setRecommendation] = useState([])
    const [selectedShowID, setSelectedShowID] = useState(null)

    // const backgroundImage = useMemo(() => )

    const findTheMostPopularShow = (shows) => {
        const mostPopularShow = shows.reduce((acc, show) => show.popularity > acc.popularity ? show : acc, {popularity:0})
        return mostPopularShow
    }

    
    
    const loadData = async() => {
        const endpointToCall = selectedShowID ? ENDPOINTS.SHOW_BY_ID(selectedShowID) : ENDPOINTS.POPULAR_SHOWS
        const datas = await callAPI({endpoint:endpointToCall})
        if(!selectedShowID){
            const mostPopularShow = findTheMostPopularShow(datas.results)
            setShow(mostPopularShow)
            const recommendations = await callAPI({endpoint:ENDPOINTS.RECOMMENDATION_BY_SHOW_ID(mostPopularShow.id)})
            setRecommendation(recommendations.results)
            return
        }
    }
    useEffect(() => {
        loadData()
    }, [])

    useEffect(() => {
        console.log({
            show,
            recommendations
        })
    }, [show, recommendations])

    return(
        <>
            HomePage
        </>
    )
}