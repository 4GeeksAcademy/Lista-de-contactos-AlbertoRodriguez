import { Link } from "react-router-dom";
import { createContact } from "../services/APIServices";




export const Navbar = ({ dispatch, contact }) => {



	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container d-flex justify-content-between align-items-center">

				{/* Lado izquierdo: ícono + texto */}
				<div className="d-flex align-items-center">
					<i className="fas fa-address-book" style={{ fontSize: '36px', color: '#0d6efd', marginRight: '12px' }}></i>
					<span className="navbar-brand mb-0 h3">Alberto</span>
				</div>

				{/* Lado derecho: botón */}
				<Link to="/add">
					<button className="btn btn-primary">Agregar Contacto</button>
				</Link>

			</div>
		</nav>
	);
};