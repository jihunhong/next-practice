export const initialState = {
    isLoggedIn : false,
    user : null,
    signUpData : {},
    loginData : {},
}


export const logInAction = (data) => {
    return {
        type : 'LOG_IN',
        data,
    }
}

export const logOutAction = (data) => {
    return {
        type : 'LOG_OUT',
    }
}


const changeNickname = (data) => {
    return {
        type : 'CHANGE_NICKNAME',
        data,
    }
}


const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'LOG_IN':
            return {
                ...state,
                isLoggedIn: true,
                user: action.data
            };
        case 'LOG_OUT':
            return {
                ...state,
                isLoggedIn: false,
                user: null,
            };
        default:
            return state;
    }
}

export default reducer;