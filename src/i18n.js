import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
 .use(initReactI18next) 
 .use(LanguageDetector)
 .use(HttpApi)
 .init({
   supportedLngs: ['en','fr',"es","ru"],
   fallbackLng: "",
   detection: {
     order: ['cookie', 'localStorage', 'htmlTag', 'path', 'subdomain'],
     caches: ['cookie']
   },
   backend: {
    loadPath: '/assets/locales/{{lng}}/translation.json',
   },
 });