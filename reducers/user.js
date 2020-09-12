export const initialState = {
    isLoggingIn: false, // 로그인 시도
    isLoggedIn : false,
    isLoggingOut : false,
    me : null,
    signUpData : {},
    loginData : {},
}


export const loginRequestAction = (data) => {
    return {
        type : 'LOG_IN_REQUEST',
        data,
    }
}

export const logOutRequestAction = (data) => {
    return {
        type : 'LOG_OUT_REQUEST',
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
        case 'LOG_IN_REQUEST':
            return {
                ...state,
                isLoggingIn: true,
            };
        case 'LOG_IN_SUCCESS':
            return {
                ...state,
                isLoggingIn: false,
                isLoggedIn: true,
                me: { ...action.data, nickname : 'JH' }
            };
        case 'LOG_IN_FAILURE':
            return {
                ...state,
                isLoggingIn: false,
                isLoggedIn: false,
            };
            
        case 'LOG_OUT_REQUEST':
            return {
                ...state,
                isLoggingOut: true,
            };
        case 'LOG_OUT_SUCCESS':
            return {
                ...state,
                isLoggedIn: false,
                isLoggingOut: false,
                me : null
            };
        case 'LOG_OUT_FAILURE':
            return {
                ...state,
                isLoggingOut: false,
            };
        default:
            return state;
    }
}

export default reducer;