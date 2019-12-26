const initialState = {
    popup: false,
    isLogin : false,
    isLoading : false,
    name: 'Diki'
}
const reducer = (state = initialState, action) => {
    if (action.type === "CHANGE_POPUP") {
        return {
            ...state,
            popup: action.value
        }
    }

    if (action.type === "CHANGE_NAME") {
        return {
            ...state,
            name: action.value
        }
    }

    if (action.type === "CHANGE_LOADING") {
        return{
            ...state,
            isLoading : action.value
        }
    }

    return state
}

export default reducer