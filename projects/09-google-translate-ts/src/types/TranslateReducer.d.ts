import { LANGUAGES } from "../consts/languages"
import { AutoLanguage, FromLanguage, FromText, Languages, ToText } from "./Translate"

export interface State {
    fromLanguage : FromLanguage
    toLanguage : Languages
    text: FromText
    result: ToText
    isLoading : boolean
    
}

export const types = {
    SWAP_LANGUAGES = "SWAP_LANGUAGES",
    SET_TO_LANGUAGE = "SET_TO_LANGUAGE",
    SET_FROM_LANGUAGE = "SET_FROM_LANGUAGE",
    SET_FROM_TEXT = "SET_FROM_TEXT",
    SET_TO_TEXT = "SET_TO_TEXT"
} as const 

export type Actions = 
    {type : typeof types.SWAP_LANGUAGES, payload :{}} |
    {type : typeof types.SET_TO_LANGUAGE, payload :{ language : Languages}} |
    {type : typeof types.SET_FROM_LANGUAGE, payload :{ language : FromLanguage}} |
    {type : typeof types.SET_FROM_TEXT, payload :{ text : FromText}} |
    {type : typeof types.SET_TO_TEXT, payload :{ text : ToText}} 