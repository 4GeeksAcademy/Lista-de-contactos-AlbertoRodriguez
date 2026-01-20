import { Link, Navigate, useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { DeleteContac } from "../services/APIServices";







export const ContactCard = ({ contact }) => {

    const { store, dispatch } = useGlobalReducer()
    const navigate = useNavigate()

    return (
        <li className="row contact">
            <div className="col-md-3 photo">
                <img src="data:image/jpeg;base64,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"
                    alt=""
                    srcSet=""
                    style={{ width: "150px", height: "150px", objectFit: "cover" }}
                />


            </div>
            <div className="col-md-7 col-10 my-auto">
                <div className="name fw-bold fs-3 text">{contact.name.toUpperCase()}</div>
                <div className="address"><i className="fa-solid fa-location-dot me-2"></i>{contact.address}</div>
                <div className="phone"><i className="fa-solid fa-phone me-2"></i>{contact.phone}</div>
                <div className="email"><i className="fa-solid fa-envelope me-2"></i>{contact.email}</div>
            </div>
            <div className="col-md-2 col-2">



                <Link to={`/edit/${contact.id}`}>
                    <button
                        type="button"
                        className="btn p-0 bg-transparent me-2"
                    >
                        <i className="fa-solid fa-pen-to-square"></i>

                    </button>
                </Link>





              
                    <button
                        type="button"
                        className="btn p-0 border-0 bg-transparent"
                        data-bs-toggle="modal"
                        data-bs-target={`#modal-${contact.id}`}
                        aria-label={`Delete ${contact.name}`}


                    >
                        <i className="fa-solid fa-trash"> </i>

                    </button>
              

                <button
                    type="button"
                    className="btn p-0  border-0 bg-transparent"
                    data-bs-toggle="modal"
                    data-bs-target={`#modal-${contact.id}`}
                    aria-label={`Delete ${contact.name}`}
                >
                    <i className="fa-solid- fa-trash"></i>
                </button>


            </div>
            <div class="modal fade" id={`modal-${contact.id}`} tabIndex="-1" aria-labelledby={`modalLabel-${contact.id}`} aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content" id={`modalLabel-${contact.id}`}> 
                        <div className="modal-body">
                            Estas seguro de eliminar a {contact.name} ?
                        </div>
                        <div class="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => {DeleteContac(contact.id, dispatch)
                                setTimeout(() =>{
                                    document.querySelector(".modal-backdrop")?.remove()
                                    document.body.classList.remove("modal-open")
                                    document.body.style=""
                                },200
                            )
                            }}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </li >
    )
}