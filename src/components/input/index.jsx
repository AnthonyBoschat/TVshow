import { useEffect, useState } from "react";
import s from "./style.module.scss";

export function Input({
    style       = null,
    className   = null,
    placeholder = "...",
    icon        = null,
    onChange    = null,
    name        = null,
    value       = null
}){



    return(
        <>
            {icon && icon}
            <input 
                value={value}
                style={{...style}} 
                placeholder={placeholder}
                className={className} 
                name={name}
                type="text" 
                onChange={onChange}
            />
        </>
    )
}