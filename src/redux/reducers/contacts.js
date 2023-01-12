const initialState = {
    contacts: [],
    contacts_ids: [],
    current_contact: null,
    isLoading: true
};

function contactsReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_CONTACTS':
            const { contacts, contacts_ids } = action.payload
            return { ...state, isLoading: false, contacts, contacts_ids };
        case 'UPDATE_CONTACTS':
            return { ...state, contacts: { ...state.contacts, ...action.payload.contacts }, contacts_ids: [...state.contacts_ids, ...action.payload.contacts_ids] };
        case 'SET_CONTACTS_LOADING':
            return { ...state, isLoading: action.payload };
        case 'SET_CURRENT_CONTACT':
            return { ...state, current_contact: action.payload };
        default:
            return state;
    }
}

export default contactsReducer