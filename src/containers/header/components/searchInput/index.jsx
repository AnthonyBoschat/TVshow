import s from "./style.module.scss";
import search from "../../../../core/assets/search.png";
import { useNavigate } from "react-router";
import { callAPI } from "../../../../core/fetch";
import { ENDPOINTS } from "../../../../core/enpoints";
import { ROUTES } from "../../../../core/Routes";
import { toast } from "react-toastify";


export function SearchInput({formRef}){

    const navigate = useNavigate()


    const handleSearch = async(event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        const searchValue = formData.get("search")
        if(searchValue){
            const datas = await callAPI({endpoint:ENDPOINTS.SHOW_BY_TITLE(searchValue), defaultMessage:"No show found with this title", returnValue:[]})
            if(!datas?.results || !datas?.results.length){
                toast.error("No show found with this title")
                return
            }
            const newShow = datas.results[0]
            navigate(ROUTES.SHOW.replace(":id", newShow.id))
        }
    }


    return(
        <form ref={formRef} onSubmit={handleSearch} className={s.container}>
            <img src={search} alt="" />
            <input name="search" placeholder="Search a tv show you may like" type="text" />
        </form>
    )
}