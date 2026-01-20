import { Link, Navigate, useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { DeleteContac } from "../services/APIServices";







export const ContactCard = ({ contact }) => {

    const { store, dispatch } = useGlobalReducer()
    const navigate = useNavigate()

    return (
        <li className="row contact">
            <div className="col-md-3 photo">
                <img
                    src="data:image/jpeg;base64,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"
                    alt="Avatar"
                    style={{
                        width: "120px",
                        height: "120px",
                        objectFit: "cover",
                        borderRadius: "50%",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                        marginRight: "8px",
                        border: "3px solid #fff"
                    }}
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
                    <i className="fa-solid"></i>
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
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => {
                                DeleteContac(contact.id, dispatch)
                                setTimeout(() => {
                                    document.querySelector(".modal-backdrop")?.remove()
                                    document.body.classList.remove("modal-open")
                                    document.body.style = ""
                                }, 200
                                )
                            }}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </li >
    )
}