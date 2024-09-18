
export const  InitializateCart = window.localStorage.getItem('react-cart')? JSON.parse(window.localStorage.getItem('react-cart')):[];

const ACTIONS_TYPE = {
    AddToCart : 'AddToCart',
    PopToCart : 'PopToCart',
    ClearCart : 'ClearCart'
}

const localStorageSave = (cart)=>{
    window.localStorage.setItem('react-cart',JSON.stringify(cart))
}

const localStorageClear = () =>{
    window.localStorage.removeItem('react-cart')
}

const SelectAction = {
    [ACTIONS_TYPE.AddToCart] : (state,action) =>{
        const { id } = action.payload
        const articleIndex = state.findIndex(item => item.id === id)
        if (articleIndex >= 0){
            const newState = [
                ...state.slice(0,articleIndex),
                {...state[articleIndex], quantity: state[articleIndex].quantity + 1},
                ...state.slice(articleIndex + 1)
            ]
            localStorageSave (newState)
            return newState
        }

        const newState = [
            ...state,
            {...action.payload , quantity : 1}
        ]
        
        localStorageSave (newState)
        return newState
    },
    [ACTIONS_TYPE.PopToCart] : (state,action) =>{
        
        const { id } = action.payload
        const articleIndex = state.findIndex(item => item.id === id)
 
        if (state[articleIndex].quantity - 1 <= 0)
        {
            const newState = state.filter(article => article.id !== id)
            localStorageSave (newState)
            return newState
        }

        const newState = [
            ...state.slice(0,articleIndex),
            {...state[articleIndex], quantity: state[articleIndex].quantity - 1},
            ...state.slice(articleIndex + 1)
        ]
        localStorageSave (newState)
        return newState

    },
    [ACTIONS_TYPE.ClearCart] : (action) =>{
        localStorageClear()
        return []
    },
}

export function CartReducer(state,action){
    const { type: actionType } = action
    const updateState = SelectAction[actionType]
    return updateState ? updateState(state, action) : state
}