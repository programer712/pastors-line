import React, { useEffect } from 'react';
import ModalA from './ModalA';
import ModalB from './ModalB';
import { useSelector, useDispatch } from 'react-redux';
import instanceAPI from '../../api/instance';
import ModalC from './ModalC';

function ModalWrapper() {
    const modal = useSelector(state => state.modal.modal)
    const dispatch = useDispatch()

    useEffect(() => {
        if (modal) {
            instanceAPI.get(`https://api.dev.pastorsline.com/api/contacts.json?companyId=171&page=1${modal === "B" ? '&countryId=226' : ""}`)
                .then(({ data }) => dispatch({
                    type: "SET_CONTACTS", payload: {
                        contacts: data.contacts, contacts_ids: data.contacts_ids
                    }
                }))
        }
    }, [modal])


    if (modal === "A") {
        return <ModalA />
    } else if (modal === "B") {
        return <ModalB />
    } else if (modal === "C") {
        return <ModalC />
    }


    return (
        <></>
    )
}

export default ModalWrapper