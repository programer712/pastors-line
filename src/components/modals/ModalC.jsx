import React from 'react'
import ModalContainer from './ModalContainer'
import { useSelector } from 'react-redux'

function ModalC() {
    const { current_contact } = useSelector(state => state.contacts)

    return (
        <ModalContainer>
            <span>name : {current_contact.first_name ? current_contact.first_name : "No name"}</span>
            <span>phone: {current_contact.full_phone_number ? current_contact.full_phone_number : "No phone"}</span>
            <span>email: {current_contact.email ? current_contact.email : "No email"}</span>
        </ModalContainer>
    )
}

export default ModalC