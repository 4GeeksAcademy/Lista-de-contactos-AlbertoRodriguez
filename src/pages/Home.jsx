import { useEffect, useState } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { createContact, getContacts } from "../services/APIServices.js";
import { ContactCard } from "../components/ContactCard.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()
	const [contact, setContact] = useState({
		"name": "Fernado",
		"phone": "333333",
		"email": "flkd@gmail.com",
		"address": "Asgard"

	})

	useEffect(() => {
		getContacts(dispatch)
	}, [])


	return (
		<div className="container">
			<div>
				{
					store.contacts.map(contact => {
						return (
							<ContactCard contact={contact} key={contact.id} />
						)
					})
				}
			</div>
			<p>Aqui hay un formulario</p>
			
			<button onClick={() => createContact(dispatch,contact)}>Agregar Contacto</button>
		</div>
	);
}; 