import About from "../pages/About";
import Contact from "../pages/Contact"
import MyModal from "../pages/MyModal"
import MyAbout from "../pages/MyAbout";
import { useState } from "react";
import MyCarousel from "../carusel/Carusel";
import {memo} from "react";
import { useTranslation } from "react-i18next";

export default  memo(function Main(){
    const [modal,setModal] = useState(false)
    const [aboutModalVisible, setAboutModalVisible] = useState(false);

    const {t} = useTranslation()

    return(
        <div>
            <MyModal visible = {modal} setVisible = {setModal}>
              <Contact setVisible ={setModal}/>
            </MyModal>
            <div className="main1-div">
              <h1 className="e-h1">Eclectique Marseille</h1>
              <h6>{t("title")}</h6>
              <h6>{t("main-h")}</h6>
              <button onClick={()=>setModal(true)} className="main-btn">{t("cont")}</button>
          </div>
          <div className="main2-div">
            <MyAbout visible={aboutModalVisible} setVisible={setAboutModalVisible}>
                <About setAboutModalVisible={setModal}/>
            </MyAbout>
            <MyCarousel />
            <button onClick={()=>setAboutModalVisible(true)} className="main-btn">{t("about")}</button>
            <button className="main-btn"> <a href="https://www.google.com/maps" className="btn-a">{t("find")}</a></button>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d179666.0681118983!2d44.32375662741841!3d40.153536006222595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406aa2dab8fc8b5b%3A0x3d1479ae87da526a!2z0JXRgNC10LLQsNC9!5e1!3m2!1sru!2sam!4v1691759385110!5m2!1sru!2sam" className="ifram" loading="lazy"  title="our address"></iframe>
          </div>
        </div>
    )
}
)