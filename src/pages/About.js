import { useTranslation } from "react-i18next";

function About(){
    const {t} = useTranslation()
    return(
        <div>
            <form>
                <h3 className="e-h1">{t("about")}</h3>
                <h5>{t("about-1text")}<br/>
                    {t("abou-2text")}
                </h5>
                <input 
                    type="text"
                    onChange={(e)=>e.target.value}
                    placeholder={t("text3")}
                    className="inp"
                />    
                <button type="submit" className="submit-btn">{t("sub")}</button>
            </form>
        </div>
    )
}
export default About