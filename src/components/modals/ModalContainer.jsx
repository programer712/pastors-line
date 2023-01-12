import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function ModalContainer({ children }) {
    const dispatch = useDispatch()
    const { modal } = useSelector(state => state.modal)
    const closeModal = () => {
        dispatch({ type: "SET_MODAL", payload: false })
    }

    const chooseModal = (modal) => {
        dispatch({ type: "SET_MODAL", payload: modal })
        dispatch({ type: "SET_CONTACTS_LOADING", payload: true })

    }

    return (
        <div className='modal-wrapper'>
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Modal {modal}</h5>

                    </div>
                    {children}
                    <div class="modal-footer">
                        <Link to="/modal-a">
                            <button type="button" class="btn btn-primary" onClick={() => chooseModal("A")}>Modal A</button>
                        </Link>
                        <Link to="/modal-b">
                            <button type="button" class="btn btn-primary" onClick={() => chooseModal("B")}>Modal B</button>
                        </Link>
                        <Link to="/">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={closeModal}>Close</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    );
}


export default ModalContainer