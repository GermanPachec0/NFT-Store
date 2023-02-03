import { useEffect } from "react";

export const Input = ({value,className,type}) =>{

    return( 
    <>
        <input className={className} type={type} value={value} />
    </>
    );
}
