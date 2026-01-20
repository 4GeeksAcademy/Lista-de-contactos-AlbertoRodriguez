import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer"
import { createContact, editContact } from "../services/APIServices";







export const Form = () => {



    const { store, dispatch } = useGlobalReducer()

    const { id } = useParams()
    console.log("Este es el id del contacto", id);


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
            editContact(contact, navigate, dispatch)

        } else {
            createContact(contact, navigate, dispatch)
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

        } else {
            console.log("Estoy creando un contacto nuevo");
            setIsEditing(false)

        }
    }, [])


    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow">
                        <div className="card-body">
                            <h4 className="card-title text-center mb-4">
                                📇 Nuevo Contacto
                            </h4>

                            <form onSubmit={handleSubmit}>
                                {showAlert && (
                                    <div className="alert alert-warning text-center" role="alert">
                                        Todos los campos son obligatorios
                                    </div>
                                )}

                                <div className="mb-3">
                                    <label className="form-label">Nombre</label>
                                    <input
                                        type="text"
                                        className="form-control form-control-sm"
                                        placeholder="Ingresa tu nombre"
                                        name="name"
                                        value={contact.name}
                                        onChange={handleInputsChange}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="correo@email.com"
                                        name="email"
                                        value={contact.email}
                                        onChange={handleInputsChange}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Teléfono</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Ej: +34 600 000 000"
                                        name="phone"
                                        value={contact.phone}
                                        onChange={handleInputsChange}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="form-label">Dirección</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Calle, número, ciudad"
                                        name="address"
                                        value={contact.address}
                                        onChange={handleInputsChange}
                                    />
                                </div>

                                <button type="submit" className="btn btn-success w-100">
                                    💾 Guardar contacto
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}