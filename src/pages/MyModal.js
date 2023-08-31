import modalCss from "../style/myModal.module.css";

function MyModal({visible,setVisible, children}){
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
export default MyModal;