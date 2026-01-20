import { json } from "react-router-dom";

export const getContacts = async (dispatch) => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/Alberto/contacts`)
    console.log(response);
    if (!response.ok) {
        createAgenda()
        return
    }
    const data = await response.json()
    console.log(data);
    dispatch({ type: 'set_contacts', payload: data.contacts })



}

const createAgenda = async (params) => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/Alberto`, {
        method: "POST"
    })
    console.log(response);

}

export const createContact = async (contact,navigate,dispatch) => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/Alberto/contacts`, {
        method: "POST",
         headers: {"Content-Type": "application/json"},
        body: JSON.stringify(contact),
       
    })
    const data = await response.json()
    dispatch({ type: 'add_contact', payload: data })
    navigate("/")

}


export const editContact = async (contact, navigate, dispatch) => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/Alberto/contacts/${contact.id}`, {
        method: "PUT",
        body: JSON.stringify(contact),
        headers: {
            "Content-type": "application/json"
        }
    })
    const data = await response.json()
    console.log(data);
    await getContacts(dispatch)
    navigate("/")



}

export const DeleteContac = async (id,dispatch) => {
    try {
        const response = await fetch(`https://playground.4geeks.com/contact/agendas/Alberto/contacts/${id}`, {
            method: "DELETE",
             
           
        })
      if(response.ok){

          dispatch({ type: 'delete_contact', payload:{id} })
      } else{
        console.error("Error al eliminar el contacto: ", response.status);
        
      }
        
        
    } catch (error) {
        console.error("Eror en Delete:", error )
        
    }



}