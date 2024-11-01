import { types } from "../consts/actionsTypes";
import { AUTO_LANGUAGE } from "../consts/languages";
import { Actions, State} from "../types/TranslateReducer.d";

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
                result: "",
                fromLanguage : state.toLanguage,
                toLanguage: state.fromLanguage
            }
        }

    }
    if (type === types.SET_FROM_LANGUAGE){
        const {language} = action.payload
        return {
            ...state,
            isLoading:true,
            fromLanguage: language
        }
    }
    if (type === types.SET_TO_LANGUAGE){
        const {language} = action.payload
        return {
            ...state,
            isLoading:true,
            toLanguage: language
        }
    }
    if (type === types.SET_FROM_TEXT){
        const {text} = action.payload
        return {
            ...state,
            result: "",
            isLoading:true,
            text: text
        }
    }
    if (type === types.SET_TO_TEXT){
        const {text} = action.payload
        return {
            ...state,
            isLoading:false,
            result: text
        }
    }
    
    return state
}


