import { useEffect } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { getContacts } from "../services/APIServices.js";
import { ContactCard } from "../components/ContactCard.jsx";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

  useEffect(() => {
	getContacts(dispatch)
  },[])


	return (
		<div className="container">
			<div>
				{
					store.contacts.map(contact =>{
						return(
							<ContactCard contact={contact} key={contact.id}/>
						)
					})
				}
			</div>
		</div>
	);
}; 