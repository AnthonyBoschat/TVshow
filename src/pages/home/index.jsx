import { useEffect, useMemo, useState } from "react";
import s from "./style.module.scss";
import { callAPI } from "../../core/fetch";
import { ENDPOINTS } from "../../core/enpoints";
import { Rating } from "react-simple-star-rating";
import { BackgroundImage } from "./components/backgroundImage";
import { ShowPresentation } from "./components/showPresentation";
import { Recommendations } from "./components/recommendations";
import { useParams } from "react-router";

export function HomePage(){

    const {id}  = useParams()
    const [show, setShow]                       = useState(null)
    const [recommendations, setRecommendation]  = useState([])
    const [selectedShowID, setSelectedShowID]   = useState(id)

    const filteredRecommendations   = useMemo(() => recommendations.filter(show => show?.backdrop_path || show?.poster_path) ,[recommendations])
    const backgroundImage           = useMemo(() => ENDPOINTS.IMAGE.BIG(show?.backdrop_path) ,[show])

    useEffect(() => {
        loadShow()
    }, [selectedShowID])

    useEffect(() => {
        setSelectedShowID(id ? id : null)
    }, [id])

    useEffect(() => {
        if(show){
            loadRecommendations()
        }
    }, [show])
    
    const loadShow = async() => {
        const endpointToCall = selectedShowID ? ENDPOINTS.SHOW_BY_ID(selectedShowID) : ENDPOINTS.POPULAR_SHOWS
        const datas = await callAPI({endpoint:endpointToCall})
        if(!selectedShowID){
            const mostPopularShow = getMostPopularShow(datas.results)
            setShow(mostPopularShow)
            return
        }else{
            setShow(datas)
            return
        }
    }

    const loadRecommendations = async() => {
        const recommendations = await callAPI({endpoint:ENDPOINTS.RECOMMENDATION_BY_SHOW_ID(show.id)})
        setRecommendation(recommendations.results)
    }

    const getMostPopularShow = (shows) => {
        const mostPopularShow = shows.reduce((acc, show) => show.popularity > acc.popularity ? show : acc, {popularity:0})
        return mostPopularShow
    }

    return(
        <div id={s.container}>
            {backgroundImage && <BackgroundImage backgroundImage={backgroundImage}/>}
            {show && <ShowPresentation show={show} />}
            {filteredRecommendations && <Recommendations recommendations={filteredRecommendations} />}
        </div>
    )
}