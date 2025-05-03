const initState = {
    user: null,
    isAuth: false
};

const accountReducer = (state = initState, action) => {
    switch (action.type) {
        case "LOGIN":
            return { ...state, user: action.payload, isAuth: true };
        case "LOGOUT":
            return { ...state, isAuth: false, user: null };
        default:
            return state;
    }
}

export default  accountReducer;