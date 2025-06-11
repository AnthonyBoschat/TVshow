import { toast } from "react-toastify";

export async function callAPI({
    endpoint            = null,
    returnValue         = [],
    defaultMessage      = null
}){
    try{
        if(!endpoint){
            const error = new Error()
            error.message = "Unable to contact this endpoint"
            throw error
        }
        const response  = await fetch(endpoint)
        const data      = await response.json()
        return data
    }catch(error){
        const message = defaultMessage ? defaultMessage : error.message ? error.message : "An error has occurred, please try again"
        toast.error(message)
        return returnValue
    }
}
