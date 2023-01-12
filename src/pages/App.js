import React from 'react';
import { Link } from 'react-router-dom';
import { getAllContacts, getUSContacts } from '../api/contacts';

import { ModalA, MoadalB, ModalWrapper } from '../components/modals';
import { useSelector, useDispatch } from 'react-redux';

const App = () => {
    const { modal } = useSelector(state => state.modal)
    const { isLoading } = useSelector(state => state.contacts)
    console.log(isLoading)
    const dispatch = useDispatch()

    const openModal = (payload, request) => {
        dispatch({ type: "SET_MODAL", payload })

        if (request === "US") {
            getUSContacts(1).then(res => {
                console.log(res)
                dispatch({ type: "SET_CONTACTS", payload: res })
            })
        }
    }

    return (
        <>
            <ModalWrapper />
            <div className='wrapper'>
                <div className='modal-btns'>
                    <Link to="/modal-a">
                        <button onClick={() => openModal('A')} className="modal-btn">A</button>
                    </Link>
                    <Link to="/modal-b">
                        <button onClick={() => openModal('B')} className="modal-btn b">B</button>
                    </Link>
                </div>

            </div>

        </>
    );
};

export default App;
