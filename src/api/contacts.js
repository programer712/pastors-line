import instanceAPI from "./instance"

export const getAllContacts = async (page) => {
    const { data } = await instanceAPI.get(`https://api.dev.pastorsline.com/api/contacts.json?companyId=171&page=${page}`)
    return { contacts: data.contacts, contacts_ids: data.contacts_ids }
}

export const getUSContacts = async (page) => {
    const { data } = await instanceAPI.get(`https://api.dev.pastorsline.com/api/contacts.json?companyId=171&page=${page}&countryId=226`)
    return { contacts: data.contacts, contacts_ids: data.contacts_ids }
}