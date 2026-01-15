export const ContactCard = ({contact}) => {

    return(
        <div>
            <h3>Name: {contact.name}</h3>
            <p>Phone: {contact.phone}</p>
            <p>Email: {contact.email}</p>
            <p>Adress: {contact.address}</p>
        </div>
    )
}