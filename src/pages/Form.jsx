import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer"
import { editContact } from "../services/APIServices";



export const Form = () => {

    

    const { store, dispatch } = useGlobalReducer()

    const { id } = useParams()
    console.log("Este es el id del contacto",id);
    

    const navigate = useNavigate()

    const [contact, setContact] = useState({
        name: "",
        phone: "",
        email: "",
        address: ""
    })
    console.log(contact);

    const [isEditing, setIsEditing] = useState(false)

    const [showAlert, setShowAlert] = useState(false);

    const handleInputsChange = (e) => {
        setContact({
            ...contact,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!contact.name || !contact.email || !contact.phone || !contact.address) {
            setShowAlert(true);
            setTimeout(() => setShowAlert(false), 2000);
            return;
        }
        //Peticion a la API para agregar o Editar contacto
        if (isEditing) {
            editContact(contact, navigate)
        }
    }


    const contactToEdit = () => {
        const contactFinded = store.contacts.find(contact => {
           

            return contact.id === Number(id)
            
        })
         
        console.log(contactFinded);
        setContact(contactFinded)
    }

    useEffect(() => {
        if (id) {
            console.log("Estoy editando");
            setIsEditing(true)
            contactToEdit()
            
        }else{
            console.log("Estoy creando un contacto nuevo");
            setIsEditing(false)
            
        }
    },[])


    return (
        <div className="container">
           
            <form onSubmit={handleSubmit}>
                {showAlert && (
                    <div className="alert alert-warning" role="alert">
                        Todos los campos son obligatorios
                    </div>
                )}
                <input 
                type="text"
                className="form-control mb-2"
                placeholder="Name"
                name="name"
                value={contact.name}
                onChange={handleInputsChange} 
                />
                 <input 
                type="text"
                className="form-control mb-2"
                placeholder="Email"
                name="email"
                value={contact.email}
                onChange={handleInputsChange} 
                />
                 <input 
                type="text"
                className="form-control mb-2"
                placeholder="Phone"
                name="phone"
                value={contact.phone}
                onChange={handleInputsChange} 
                />
                 <input 
                type="text"
                className="form-control mb-2"
                placeholder="Addres"
                name="address"
                value={contact.address}
                onChange={handleInputsChange} 
                />
                <button type="submit" className="btn-success w-100">Salvar</button>
            </form>
        </div>
    )
}