import { types } from "../consts/actionsTypes"
import { LANGUAGES } from "../consts/languages"
import { AutoLanguage, FromLanguage, Languages, } from "./Translate"

export interface State {
    fromLanguage : FromLanguage
    toLanguage : Languages
    text: string
    result: string
    isLoading : boolean
    
}

export type Actions = 
    {type : typeof types.SWAP_LANGUAGES, payload :{}} |
    {type : typeof types.SET_TO_LANGUAGE, payload :{ language : Languages}} |
    {type : typeof types.SET_FROM_LANGUAGE, payload :{ language : FromLanguage}} |
    {type : typeof types.SET_FROM_TEXT, payload :{ text : string}} |
    {type : typeof types.SET_TO_TEXT, payload :{ text : string}} 