import { useTranslation } from "react-i18next";

function Contact(){
    const {t} = useTranslation()
    return(
        <div>
            <form className="form-contact">
                <h3 className="e-h1">{t("cont")}</h3>
                <input  
                    type="text"
                    onChange={(e)=>e.target.value}
                    placeholder={t("name")}
                    className="inp"
                />
                  <input  
                    type="tel"
                    onChange={(e)=>e.target.value}
                    placeholder={t("phone")}
                    className="inp"
                />
                 <input  
                    type="email"
                    onChange={(e)=>e.target.value}
                    placeholder={t("email")}
                    className="inp"
                />
                 <input  
                    type="email"
                    onChange={(e)=>e.target.value}
                    placeholder={t("email2")}
                    className="inp"
                />
                <h6>How can we help you</h6>
                <input  
                    type="text"
                    onChange={(e)=>e.target.value}
                    placeholder={t("text1")}
                    maxlegth={1000}
                    className="inp"
                />
                <button type="submit" className="submit-btn">{t("sub")}</button>
                <h6>{t("text2")}</h6>
            </form>
        </div>
    )
}
export default Contact