import { useState } from "react";
export default function SearchContact(props) {
  const [searchResults, setSearchResults] = useState([]);

  const listSearchResult = searchResults.map((sR, i) => (
    <li key={i}>
      {sR.name}:{sR.phone}
    </li>
  ));

  return (
    <div className="search-contact">
      <h1>Buscar contacto</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          let data = {
            search: e.target.search.value,
            props,
          };
          setSearchResults(onSubmit(data));
          e.target.reset();
        }}
      >
        <label>
          Nombre del contacto:
          <input type="text" name="search" />
        </label>
        <input type="submit" name="search_contact" value="Buscar contacto" />
      </form>
      <ul>
        <ul>{listSearchResult}</ul>
      </ul>
    </div>
  );
}

const onSubmit = (data) => {
  let { search, props } = data;
  let searchResults = props.contacts.filter(
    (contact) => (contact.name === search) | (contact.phone === search)
  );
  return searchResults;
};
