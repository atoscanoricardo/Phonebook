export default function EditContact(props) {
  let { contact } = props;
  return (
    <div className="edit-contact">
      <h1>Editar contacto</h1>
      <label>
        {props.contact.name}:{props.contact.phone}
      </label>
      <hr />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          let data = {
            name: e.target.name.value,
            phone: e.target.phone.value,
            contactSearch: contact,
            props,
          };
          onSubmit(data);
          e.target.reset();
        }}
      >
        <label>
          Nombre del contacto:
          <input type="text" name="name" />
        </label>
        <label>
          Número de teléfono:
          <input type="text" name="phone" />
        </label>
        <input type="submit" name="edit_contact" value="Editar contacto" />
      </form>
    </div>
  );
}

const onSubmit = (data) => {
  let { name, phone, contactSearch, props } = data;
  let contacts = props.contacts;
  let index = contacts.findIndex(
    (c) => c.name === contactSearch.name || c.phone === contactSearch.phone
  );
  contacts[index].name = name;
  contacts[index].phone = phone;
  props.setContacts([...contacts]);
};
