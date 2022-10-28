export default function ListarContact(props) {
  const listItems = props.contacts.map((contact, i) => (
    <li key={i} onClick={selectContact(props, i)}>
      {contact.name}:{contact.phone}
    </li>
  ));

  return (
    <div className="list-contact">
      <h1>Listar contacto</h1>
      <ul>
        <ul>{listItems}</ul>
      </ul>
    </div>
  );
}

const selectContact = (props, i) => {
  return () => {
    props.setContact(props.contacts[i]);
  };
};
