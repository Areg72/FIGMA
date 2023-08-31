import modalCss from "../style/myAbout.module.css";

function MyAbout({visible,setVisible, children}){
    const rootModal= [modalCss.myModal]
    if(visible){
        rootModal.push(modalCss.active)
    }
    return(
        <div className={rootModal.join(" ")} onClick={()=>setVisible(false)}>
            <div className={modalCss.myContent} onClick={(e)=> e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}
export default MyAbout;