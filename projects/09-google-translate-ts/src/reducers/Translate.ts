import { AUTO_LANGUAGE } from "../consts/languages";
import { Actions, State, types } from "../types/TranslateReducer";

export const InitialState:State = {
    fromLanguage : AUTO_LANGUAGE,
    toLanguage : 'en',
    text: '',
    result: '',
    isLoading : false
}

export function TranslateReducer (state : State, action: Actions): State{
    const {type} = action

    if (type === types.SWAP_LANGUAGES){
        if(state.fromLanguage != AUTO_LANGUAGE){
            return {
                ...state,
                text : state.result,
                result: state.text,
                fromLanguage : state.toLanguage,
                toLanguage: state.fromLanguage
            }
        }

    }
    if (type === types.SET_FROM_LANGUAGE){
        const {language} = action.payload
        return {
            ...state,
            fromLanguage: language
        }
    }
    if (type === types.SET_TO_LANGUAGE){
        const {language} = action.payload
        return {
            ...state,
            toLanguage: language
        }
    }
    if (type === types.SET_FROM_TEXT){
        const {text} = action.payload
        return {
            ...state,
            text: text
        }
    }
    if (type === types.SET_TO_TEXT){
        const {text} = action.payload
        return {
            ...state,
            result: text
        }
    }
    
    return state
}


