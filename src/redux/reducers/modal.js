const initialState = {
    modal: false,
};

function modalReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_MODAL':
            return { ...state, modal: action.payload };
        case 'SET_MODAL_LOADING':
        default:
            return state;
    }
}

export default modalReducer