import React from 'react'

function ContactItem({ phoneNumber, fullName, onClick }) {

  return (
    <div className='contact' onClick={onClick}>
      <span className="contact-name">{fullName}</span>
      <span className="contact-phone">{phoneNumber}</span>
    </div>
  )
}

export default ContactItem