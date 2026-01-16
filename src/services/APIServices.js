export const getContacts = async (dispatch) => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/Alberto/contacts`)
    console.log(response);
    if (!response.ok) {
        createAgenda()
        return
    }
    const data = await response.json()
    console.log(data);
    dispatch({type: 'set_contacts', payload: data.contacts})

    
    
}

const createAgenda = async (params) => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/Alberto`, {
        method: "POST"
    })
    console.log(response);
    
}

 export const createContact = async (dispatch,contact) => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/Alberto/contacts`,{
        method: "POST",
        body: JSON.stringify(contact),
        headers: {
            "Content-Type": "application/json"
        }
    })
    const data = await response.json()
    dispatch({type: 'add_contact',payload: data})
    
}