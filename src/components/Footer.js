import {memo} from "react";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";

 export default memo(function Footer(){
    const {t} = useTranslation()

    const changeLangveges =(e)=>{
        changeLanguage(e.target.value)
    }

    return(
        <div className="footer">
            <div className="footer1-div">
                <h1><b className="ftr-b">{t("add")}</b></h1>
                <button className="main-btn">
                    <a href="https://www.google.com/maps" className="btn-a" target="blank">{t("ftr-btn")}</a>
                </button>
                <i className="gg-trending" ></i>
                <p>{t("ftr-p1")}<br/> {t("ftr-p2")}</p>
            </div>
            <div className="footer2-div">
                <div className="ftr2-div">
                    <a href="https://www.instagram.com/" target="blank" className="ftr-a"> 
                        <i className="gg-instagram" ></i></a><br/>
                    <a href="https://ru-ru.facebook.com/" target="blank" className="ftr-a"> 
                        <i className="gg-facebook" ></i></a><br/>
                    <a href="https://www.google.com/" target="blank" className="ftr-a">
                        <i className="gg-google" ></i></a>
                    <select onChange={changeLangveges} className="opt">
                        <option value="en">{t("en")}</option>
                        <option value="fr">{t("fr")}</option>
                        <option value="es">{t("es")}</option>
                        <option value="ru">{t("ru")}</option>
                    </select>
                </div>
               <div className="ftr2-div">
                    <h2><b className="ftr-b">{t("ftr-b")}</b></h2>
                    <p>{t("ftr-h1")}</p>
                    <p>{t("ftr-h2")}</p>
                    <p>{t("ftr-h3")}</p>
                    <p>{t("ftr-h4")}</p>
                    <p>{t("ftr-h5")}</p>
                    <p>{t("ftr-h6")}</p>
                    <p>{t("ftr-h7")}</p>
               </div>
            </div>
        </div>
    )
}
)