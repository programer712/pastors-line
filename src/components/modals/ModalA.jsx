import React, { useRef, useState } from 'react'
import ModalContainer from './ModalContainer'
import ContactItem from '../contact/ContactItem'
import Scrollbars from 'react-custom-scrollbars';
import { getAllContacts } from '../../api/contacts';

import { useSelector, useDispatch } from 'react-redux'

function ModalA() {
    const [page, setPage] = useState(1)
    const [loadingNewContacts, setLoadingNewContacts] = useState(false)
    const [evenFilter, setEvenFilter] = useState(false)
    const [filterValue, setFilterValue] = useState("")
    const { isLoading, contacts, contacts_ids } = useSelector(state => state.contacts)
    const dispatch = useDispatch()

    const refScroll = useRef(null)

    const chooseCurrentContact = (contact) => {
        dispatch({ type: "SET_CURRENT_CONTACT", payload: contact })
        dispatch({ type: "SET_MODAL", payload: "C" })
    }

    const handleScroll = () => {
        const scrollTop = refScroll.current.getValues().scrollTop;
        const scrollHeight = refScroll.current.getValues().scrollHeight;
        const clientHeight = refScroll.current.getValues().clientHeight;
        // Check if the user has scrolled to the bottom of the page
        if (scrollTop + clientHeight >= scrollHeight) {
            setLoadingNewContacts(true)
            // Increment the page number
            getAllContacts(page + 1).then(res => {
                setPage(prev => prev + 1)
                dispatch({ type: "UPDATE_CONTACTS", payload: res })
            }).then(res => setLoadingNewContacts(false))
        }
    };

    const onChangeFilter = (e) => {
        setFilterValue(e.target.value)
    }

    return (
        <ModalContainer>
            {isLoading ? <h3>Loading...</h3> : (
                <>
                    <h3>All Contacts </h3>
                    <span>
                        Only even ids:
                        <input onChange={() => setEvenFilter(!evenFilter)} type="checkbox" name="even" id="even" />
                    </span>
                    <input type="text" value={filterValue} onChange={(e) => onChangeFilter(e)} placeholder="filter be substing..." />
                    <div className="contacts-container">
                        <Scrollbars ref={refScroll} onScroll={handleScroll}>
                            {
                                contacts_ids.map(id => {
                                    const fullName = contacts[id].first_name ? contacts[id].first_name + contacts[id].last_name : "No Name"
                                    const phoneNumber = contacts[id].full_phone_number

                                    if (evenFilter) {
                                        if (id % 2 === 0 & fullName.toLowerCase().includes(filterValue.toLocaleLowerCase())) {
                                            return <ContactItem onClick={() => chooseCurrentContact(contacts[id])} fullName={fullName} phoneNumber={phoneNumber} />
                                        }
                                    } else {
                                        if (fullName.toLowerCase().includes(filterValue.toLocaleLowerCase())) {
                                            return <ContactItem onClick={() => chooseCurrentContact(contacts[id])} fullName={fullName} phoneNumber={phoneNumber} />
                                        }
                                    }

                                })
                            }
                        </Scrollbars>
                        {loadingNewContacts && <h4>Loading more ...</h4>}
                    </div>
                </>
            )}


        </ModalContainer>
    )
}

export default ModalA