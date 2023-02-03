
export const Button = ({children,className,type,action}) =>{
    return( 
    <>
        <button className={className} type={type} onClick={action}>{children}</button>
    </>
    );
}