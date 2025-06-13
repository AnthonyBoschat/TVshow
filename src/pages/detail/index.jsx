import { useNavigate, useParams } from "react-router";
import s from "./style.module.scss";
import { useEffect, useMemo, useState } from "react";
import { ShowPresentation } from "../home/components/showPresentation";
import { callAPI } from "../../core/fetch";
import { ENDPOINTS } from "../../core/enpoints";
import { Section } from "./components/section";
import left from "../../core/assets/left.png"
import { BackgroundImage } from "../home/components/backgroundImage";
import { ROUTES } from "../../core/routes.js";

export function DetailPage(){

    const navigate = useNavigate()
    const {id} = useParams()
    const [show, setShow] = useState(null)
    const backgroundImage = useMemo(() => ENDPOINTS.IMAGE.BIG(show?.backdrop_path) ,[show])
    const cast = useMemo(() => show && show.credits.cast, [show])
    const infos = useMemo(() => show && [
        {label:"Status", value:show.status},
        {label:"First Air Date", value:show.first_air_date},
        {label:"Last Air Date", value:show.last_air_date},
        {label:"Number of Seasons", value:show.number_of_seasons},
        {label:"Number of Episodes", value:show.number_of_episodes},
        {label:"Network", value:show.networks[0]?.name},
    ], [show])
    const createBy = useMemo(() => show && show.created_by, [show])

    useEffect(() => {
        loadData()
    }, [])

    const loadData = async() => {
        const datas = await callAPI({endpoint:ENDPOINTS.SHOW_BY_ID(id)})
        setShow(datas)
    }

    return(
        <div id={s.main_container}>
            <div id={s.container}>
                {backgroundImage && <BackgroundImage backgroundImage={backgroundImage}/>}
                
                <header>
                    <div onClick={() => navigate(ROUTES.HOME)} className={s.back}>
                        <img src={left} alt="" />
                        <span>Back to Home</span>
                    </div>
                </header>

                {show && <ShowPresentation show={show} />}

                {createBy ? (
                    <Section 
                        className={s.created_by}
                        title="Created by" 
                        elements={createBy} 
                        render={(element) => (
                            <li className={s.li_created_by}>
                                <span>{element?.name}</span>
                            </li>
                        )} 
                    />
                ) : null}
                {infos ? (
                    <Section 
                        className={s.infos}
                        title="Show info" 
                        elements={infos} 
                        render={(element) => (
                            <li className={s.li_infos}>
                                {element?.label} : <span className={s.value}>{element?.value ?? "unknown"}</span>
                            </li>
                        )} 
                    />
                ) : null}
                {cast ? (
                    <Section 
                        className={s.cast}
                        title="Main Cast" 
                        elements={cast} 
                        render={(element) => (
                            <li className={s.li_cast}>
                                <img src={ENDPOINTS.IMAGE.SMALL(element?.profile_path)} alt="" />
                                <div className={s.detail}>
                                    <span className={s.name}>{element?.name}</span>
                                    <span className={s.character}>{element?.character}</span>
                                </div>
                            </li>
                        )} 
                    />
                ) : null}

            </div>
        </div>
    )
}