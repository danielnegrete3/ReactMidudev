import { useReducer } from "react"
import { InitialState, TranslateReducer } from "../reducers/Translate"
import { FromLanguage, Languages } from "../types/Translate.d"
import { types } from "../consts/actionsTypes"

export function useTranslate(){
    const [state,dispatch] = useReducer(TranslateReducer,InitialState)
    
     const swapLanguage = () => {
        dispatch({type: types.SWAP_LANGUAGES, payload: {}})
     }

     const setFromLanguage  = ({language}:{language:FromLanguage}) => {
        dispatch({type: types.SET_FROM_LANGUAGE, payload: {language}})
     }
     
     const setToLanguage  = ({language}:{language:Languages}) => {
        dispatch({type: types.SET_TO_LANGUAGE, payload: {language}})
     }

     const setFromText  = ({text}:{text:string}) => {
        dispatch({type: types.SET_FROM_TEXT, payload: {text}})
     }

     const setToText = ({text}:{text:string}) => {
        dispatch({type: types.SET_TO_TEXT, payload: {text}})
     }

     return {...state,swapLanguage,setFromLanguage,setToLanguage,setFromText,setToText}
}