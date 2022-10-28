export default function DeleteContact(props) {
  return (
    <div className="delete-contact">
      <h1>Eliminar contacto</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(props);
          e.target.reset();
        }}
      >
        <input type="submit" name="delete_contact" value="Eliminar contacto" />
      </form>
    </div>
  );
}

const onSubmit = (props) => {
  let contacts = props.contacts;
  let contact = props.contact;
  let index = contacts.findIndex(
    (c) => c.name === contact.name || c.phone === contact.phone
  );
  contacts.splice(index, 1);
  props.setContacts([...contacts]);
};
