import { Link } from "react-router-dom";
import { createContact } from "../services/APIServices";




export const Navbar = ({dispatch, contact}) => {



	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
					<Link to="/add">
						<button className="btn btn-primary" > contact</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};