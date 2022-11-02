import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  AddContact,
  EditContact,
  DeleteContact,
  ListContact,
  SearchContact,
} from "../components/contact";

export default function Phonebook() {
  const [contact, setContact] = useState([]);
  const [contacts, setContacts] = useState([
    { name: "Adam West", phone: "3042216698" },
  ]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/addcontact"
            element={
              <AddContact contacts={contacts} setContacts={setContacts} />
            }
          />
          <Route
            path="/editcontact"
            element={
              <EditContact
                contacts={contacts}
                contact={contact}
                setContacts={setContacts}
              />
            }
          />
          <Route
            path="/deletecontact"
            element={
              <DeleteContact
                contacts={contacts}
                contact={contact}
                setContacts={setContacts}
              />
            }
          />
          <Route
            path="/listcontact"
            element={
              <ListContact contacts={contacts} setContact={setContact} />
            }
          />
          <Route
            path="/searchcontact"
            element={<SearchContact contacts={contacts} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
/*
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
    <div className="phonebook">
      <h1 className="header">Agenda</h1>
      <AddContact />
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
*/
