export default function AddContact(props) {
  return (
    <div className="add-contact">
      <h1>Agregar contacto</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          let data = {
            name: e.target.name.value,
            phone: e.target.phone.value,
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
        <br />
        <label>
          N&uacute;mero del contacto:
          <input type="text" name="phone" />
        </label>
        <br />
        <input type="submit" name="save_contact" value="Guardar contacto" />
      </form>
    </div>
  );
}

const onSubmit = (data) => {
  let { name, phone, props } = data;
  props.setContacts([...props.contacts, { name, phone }]);
};
