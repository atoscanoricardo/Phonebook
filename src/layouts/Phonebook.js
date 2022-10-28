import { useState } from "react";
import {
  AddContact,
  EditContact,
  ListContact,
  SearchContact,
  DeleteContact,
} from "../components/contact";

export const Phonebook = () => {
  // const [contacts, setContacts] = useState([{ name: "Adam West", phone: "3042216698" }]);
  const [contact, setContact] = useState([]);
  const [contacts, setContacts] = useState([
    { name: "Adam West", phone: "3042216698" },
  ]);

  return (
    <div>
      <h1>Agenda</h1>
      <AddContact contacts={contacts} setContacts={setContacts} />
      <ListContact contacts={contacts} setContact={setContact} />
      <SearchContact contacts={contacts} />
      <EditContact
        contacts={contacts}
        contact={contact}
        setContacts={setContacts}
      />
      <DeleteContact
        contacts={contacts}
        contact={contact}
        setContacts={setContacts}
      />
    </div>
  );
};
