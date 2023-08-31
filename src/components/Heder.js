import img from "../images/heder/E.jpg";
import img1 from "../images/icon/a1.jpg";
import img2 from "../images/icon/a2.jpg";
import About from "../pages/About";
import Find from "../pages/Find";
import {memo} from "react";
import { useTranslation } from "react-i18next";


export default memo(function Header(){
    const {t} = useTranslation()
    return(
        <div className="hdr-div">
            <div className="e">
                <img src={img} className="hdr-img1" alt=""/>
                <h1 className="e-h1">Eclectique Marseille</h1>
            </div>
            <div className="hdr-right">
                <div className="hdr-2-div">
                    <img src={img1} className="hdr-img2" alt=""/>
                    <a href={<About/>} className="hdr-a"><b>{t("about")}</b> </a>
                </div>
                <div className="hdr-2-div">
                    <img src={img2} className="hdr-img2" alt=""/>
                    <a href={<Find/>} className="hdr-a"><b>{t("find")}</b></a>
                </div>
            </div>
        </div>
    )
}
)