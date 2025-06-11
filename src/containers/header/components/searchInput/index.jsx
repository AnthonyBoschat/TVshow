import s from "./style.module.scss";
import search from "../../../../core/assets/search.png";
import { useNavigate } from "react-router";
import { callAPI } from "../../../../core/fetch";
import { ENDPOINTS } from "../../../../core/enpoints";
import { ROUTES } from "../../../../core/Routes";
import { toast } from "react-toastify";
import { useShow } from "../../../../core/services/useShow";
import { Input } from "../../../../components/input";


export function SearchInput({formRef}){

    const navigate = useNavigate()
    const {findFirstValidShow} = useShow()


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
            const newShow = findFirstValidShow(datas.results)
            if(!newShow){
                toast.error("No show found with this title")
                return
            }
            console.log("newShow", newShow)
            navigate(ROUTES.SHOW.replace(":id", newShow.id))
        }
    }


    return(
        <form ref={formRef} onSubmit={handleSearch} className={s.container}>
            
            <Input 
                icon={<img src={search} alt="" />}
                name={"search"}
                placeholder="Search a tv show you may like"
                className={s.search_input}
            />
        </form>
    )
}